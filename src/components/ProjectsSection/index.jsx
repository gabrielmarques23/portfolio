import { useEffect, useId, useRef, useState } from "react";
import { ProjectCarousel } from "../ProjectCarousel";
import { ProjectDetails } from "../ProjectDetails";
import { Section, SectionContent, SectionHeading, Stage, StageOverview, Backdrop, Summary, ExpandButton } from "./style";

export function ProjectsSection({ projects = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stageRef = useRef(null);
  const panelId = useId();
  const project = projects[activeIndex] || projects[0];
  const hasProject = Boolean(project);

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
        <Backdrop $variant={project.art} aria-hidden="true">
          {project.image && <img src={project.image} alt="" />}
          <div />
        </Backdrop>
        <StageOverview>
        <Summary>
          <div aria-live="polite" aria-atomic="true">
            <small>{project.demonstration ? "Exemplo · " : ""}{project.category}</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <ExpandButton ref={expandRef} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Ver menos ↑" : "Ver mais ↓"}
          </ExpandButton>
        </Summary>
        <ProjectCarousel projects={projects} activeIndex={activeIndex} onSelect={selectProject} />
        </StageOverview>
        <ProjectDetails key={project.id} project={project} open={expanded} onClose={close} panelId={panelId} />
      </Stage>
      </SectionContent>
    </Section>
  );
}
