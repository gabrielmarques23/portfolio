import { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer, MainContent, CenterStage, HeroEnvironment, AboutSection, AboutContent, AboutCopy, ContactSection, ContactContent, Footer, FooterContent } from "./style";
import { CanvasFrame } from "../../components/CanvasFrame";
import { Dock } from "../../components/Dock";
import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { ProjectsSection } from "../../components/ProjectsSection";
import { AutoStoreCase } from "../../components/AutoStoreCase";
import { MetricsCard } from "../../components/MetricsCard";
import { portfolioData } from "../../data/portfolio";
import fotoPerfil from "../../../imagens/fotoPerfil.jpg";

export function Details() {
  const aboutRef = useRef(null);
  const caseStudyTriggerRef = useRef(null);
  const closeFocusRequested = useRef(false);
  const [autoStoreInfoOpen, setAutoStoreInfoOpen] = useState(() => window.location.hash === "#autostore-case");
  const autoStoreProject = portfolioData.projects.find((project) => project.id === "autostore");
  const closeAutoStoreInformation = () => {
    closeFocusRequested.current = true;
    setAutoStoreInfoOpen(false);
  };
  const afterAutoStoreClose = useCallback(() => {
    if (closeFocusRequested.current) caseStudyTriggerRef.current?.focus();
    closeFocusRequested.current = false;
  }, []);

  useEffect(() => {
    // Reopening cancels the pending exit, including its requested focus return.
    if (autoStoreInfoOpen) closeFocusRequested.current = false;
  }, [autoStoreInfoOpen]);

  useEffect(() => {
    const revealCase = () => {
      if (window.location.hash === "#autostore-case") setAutoStoreInfoOpen(true);
    };
    window.addEventListener("hashchange", revealCase);
    window.addEventListener("popstate", revealCase);
    return () => {
      window.removeEventListener("hashchange", revealCase);
      window.removeEventListener("popstate", revealCase);
    };
  }, []);

  useEffect(() => {
    const section = aboutRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = [...section.querySelectorAll("[data-about-reveal], aside")].map((element) => ({
      element, y: 0, opacity: element.style.opacity, transform: element.style.transform,
    }));
    let frame = 0;
    const restore = () => {
      items.forEach((item) => {
        item.element.style.opacity = item.opacity;
        item.element.style.transform = item.transform;
        item.y = 0;
      });
    };
    const paint = () => {
      frame = 0;
      const height = window.innerHeight;
      // Measure before writing, excluding our previous translation from each rect.
      const positions = items.map((item) => item.element.getBoundingClientRect().top - item.y);
      items.forEach((item, index) => {
        const focused = item.element.contains(document.activeElement);
        const progress = focused ? 1 : Math.max(0, Math.min(1,
          (height * .9 - positions[index]) / (height * .25)));
        const eased = progress * progress * (3 - 2 * progress);
        item.y = (1 - eased) * 24;
        item.element.style.opacity = String(eased);
        item.element.style.transform = `translate3d(0, ${item.y}px, 0)`;
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      section.removeEventListener("focusin", schedule);
      section.removeEventListener("focusout", schedule);
      restore();
    };
    const preferencesChanged = () => {
      stop();
      if (reducedMotion.matches) return;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      section.addEventListener("focusin", schedule);
      section.addEventListener("focusout", schedule);
      schedule();
    };
    preferencesChanged();
    reducedMotion.addEventListener("change", preferencesChanged);
    return () => {
      stop();
      reducedMotion.removeEventListener("change", preferencesChanged);
    };
  }, []);

  return (
    <PageContainer id="home">
      <a className="skip-link" href="#projects">Pular para os projetos</a>
      <Dock items={portfolioData.navigation} />
      <CanvasFrame>
        <HeroEnvironment data-nav-section="home">
          <TopBar />
          <CenterStage><Hero heroData={portfolioData.hero} profileData={portfolioData.profile} /></CenterStage>
        </HeroEnvironment>
        <MainContent>
          <AboutSection id="skills" data-nav-section="skills" aria-labelledby="about-heading">
            <AboutContent ref={aboutRef}>
              <AboutCopy>
                <small data-about-reveal>Sobre & habilidades</small>
                <h2 id="about-heading" data-about-reveal>Engenharia e interfaces com identidade.</h2>
                <p data-about-reveal>{portfolioData.profile.role}, em {portfolioData.profile.location}.</p>
                <p data-about-reveal>{portfolioData.hero.description}</p>
                <a href="#projects" data-about-reveal>Conheça os projetos ↓</a>
              </AboutCopy>
              <MetricsCard profile={portfolioData.profile} metrics={portfolioData.metrics} stack={portfolioData.stack} avatarSrc={fotoPerfil} />
            </AboutContent>
          </AboutSection>
          <ProjectsSection projects={portfolioData.projects} autoStoreInfoOpen={autoStoreInfoOpen}
            onAutoStoreInfoChange={setAutoStoreInfoOpen} caseStudyTriggerRef={caseStudyTriggerRef} />
          <AutoStoreCase project={autoStoreProject} informationOpen={autoStoreInfoOpen}
            onInformationClose={closeAutoStoreInformation} onCloseComplete={afterAutoStoreClose} />
          <ContactSection id="contact" aria-labelledby="contact-heading">
            <ContactContent>
              <small>Contato</small>
              <h2 id="contact-heading">Vamos construir algo juntos?</h2>
              <p>Converse comigo sobre seu próximo projeto.</p>
              <a href="mailto:contato.gabmarques@gmail.com">Vamos conversar ↗</a>
            </ContactContent>
          </ContactSection>
          <Footer><FooterContent><span>{portfolioData.profile.name}</span><span>Desenvolvimento & design</span><a href="https://github.com/gabrielmarques23" target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)">GitHub ↗</a></FooterContent></Footer>
        </MainContent>
      </CanvasFrame>
    </PageContainer>
  );
}
