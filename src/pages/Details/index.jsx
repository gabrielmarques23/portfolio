import { PageContainer, MainContent, CenterStage, AboutSection, AboutCopy, ContactSection, Footer } from "./style";
import { CanvasFrame } from "../../components/CanvasFrame";
import { Dock } from "../../components/Dock";
import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { ProjectsSection } from "../../components/ProjectsSection";
import { MetricsCard } from "../../components/MetricsCard";
import { portfolioData } from "../../data/portfolio";
import fotoPerfil from "../../../imagens/fotoPerfil.jpg";

export function Details() {
  return (
    <PageContainer id="home">
      <a className="skip-link" href="#projects">Pular para os projetos</a>
      <CanvasFrame>
        <Dock items={portfolioData.navigation} />
        <MainContent>
          <TopBar />
          <CenterStage><Hero heroData={portfolioData.hero} profileData={portfolioData.profile} /></CenterStage>
          <AboutSection aria-labelledby="about-heading">
            <AboutCopy>
              <small>Sobre & habilidades</small>
              <h2 id="about-heading">Engenharia e interfaces com identidade.</h2>
              <p>{portfolioData.profile.role}, em {portfolioData.profile.location}.</p>
              <p>{portfolioData.hero.description}</p>
              <a href="#projects">Conheça os projetos ↓</a>
            </AboutCopy>
            <MetricsCard profile={portfolioData.profile} metrics={portfolioData.metrics} stack={portfolioData.stack} avatarSrc={fotoPerfil} />
          </AboutSection>
          <ProjectsSection projects={portfolioData.projects} />
          <ContactSection id="contact" aria-labelledby="contact-heading">
            <small>Contato</small>
            <h2 id="contact-heading">Vamos construir algo juntos?</h2>
            <p>Converse comigo sobre seu próximo projeto.</p>
            <a href="mailto:contato.gabmarques@gmail.com">Vamos conversar ↗</a>
          </ContactSection>
          <Footer><span>{portfolioData.profile.name}</span><span>Desenvolvimento & design</span><a href="https://github.com/gabrielmarques23" target="_blank" rel="noopener noreferrer">GitHub (abre em nova aba) ↗</a></Footer>
        </MainContent>
      </CanvasFrame>
    </PageContainer>
  );
}
