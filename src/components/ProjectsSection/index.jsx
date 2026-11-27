import { useEffect, useId, useRef, useState } from "react";
import { ProjectCarousel } from "../ProjectCarousel";
import { ProjectDetails } from "../ProjectDetails";
import { Section, SectionContent, SectionHeading, Stage, StageOverview, Summary, ExpandButton } from "./style";

export function ProjectsSection({ projects = [], autoStoreInfoOpen = false, onAutoStoreInfoChange, caseStudyTriggerRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stageRef = useRef(null);
  const panelId = useId();
  const project = projects[activeIndex] || projects[0];
  const hasProject = Boolean(project);
  const hasCaseInformation = project?.id === "autostore" && Boolean(onAutoStoreInfoChange);
  const informationExpanded = hasCaseInformation ? autoStoreInfoOpen : expanded;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = [headingRef.current, stageRef.current].map((element, index) => ({
      element, distance: index === 0 ? 16 : 24, y: 0,
      opacity: element.style.opacity, transform: element.style.transform,
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
      const height = Math.max(1, window.innerHeight);
      // Subtract our previous translation to keep scroll progress independent of motion.
      const positions = items.map((item) => item.element.getBoundingClientRect().top - item.y);
      items.forEach((item, index) => {
        const focused = item.element.contains(document.activeElement);
        const progress = focused ? 1 : Math.max(0, Math.min(1,
          (height * .9 - positions[index]) / (height * .25)));
        const eased = progress * progress * (3 - 2 * progress);
        item.y = (1 - eased) * item.distance;
        item.element.style.opacity = String(eased);
        item.element.style.transform = `translate3d(0, ${item.y}px, 0)`;
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const revealFocused = () => {
      cancelAnimationFrame(frame);
      paint();
    };
    const observer = new ResizeObserver(schedule);
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      section.removeEventListener("focusin", revealFocused);
      section.removeEventListener("focusout", schedule);
      restore();
    };
    const preferencesChanged = () => {
      stop();
      if (reducedMotion.matches) return;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      section.addEventListener("focusin", revealFocused);
      section.addEventListener("focusout", schedule);
      observer.observe(section);
      items.forEach((item) => observer.observe(item.element));
      schedule();
    };
    preferencesChanged();
    reducedMotion.addEventListener("change", preferencesChanged);
    return () => {
      stop();
      reducedMotion.removeEventListener("change", preferencesChanged);
    };
  }, [hasProject]);

  if (!project) return null;

  const selectProject = (index) => {
    if (index < 0 || index >= projects.length) return;
    setActiveIndex(index);
    setExpanded(false);
    onAutoStoreInfoChange?.(false);
  };
  const close = () => {
    setExpanded(false);
    expandRef.current?.focus();
  };
  return (
    <Section ref={sectionRef} id="projects" aria-labelledby="projects-heading">
      <SectionContent>
      <SectionHeading ref={headingRef}><h2 id="projects-heading">Projetos em destaque</h2><p>{projects.every((item) => item.demonstration) ? "Seleção demonstrativa · projetos fictícios" : "Seleção de projetos"}</p></SectionHeading>
      <Stage ref={stageRef}>
        <StageOverview>
        <Summary>
          <div aria-live="polite" aria-atomic="true">
            <small>{project.demonstration ? "Exemplo · " : ""}{project.category}</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <ExpandButton ref={(element) => {
            expandRef.current = element;
            if (caseStudyTriggerRef) caseStudyTriggerRef.current = element;
          }} type="button" aria-expanded={informationExpanded}
            aria-controls={hasCaseInformation ? "autostore-case" : panelId}
            onClick={() => hasCaseInformation ? onAutoStoreInfoChange(!autoStoreInfoOpen) : setExpanded(!expanded)}>
            {informationExpanded ? "Ver menos ↑" : hasCaseInformation ? "Mais informações ↓" : "Ver mais ↓"}
          </ExpandButton>
          {project.caseStudy && <a className="case-study-link" href={project.caseStudy} onClick={() => onAutoStoreInfoChange?.(true)}>Conheça a experiência ↘</a>}
        </Summary>
        <ProjectCarousel projects={projects} activeIndex={activeIndex} onSelect={selectProject} />
        </StageOverview>
        {!hasCaseInformation && <ProjectDetails key={project.id} project={project} open={expanded} onClose={close} panelId={panelId} />}
      </Stage>
      </SectionContent>
    </Section>
  );
}
