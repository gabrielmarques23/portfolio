import { useId, useRef, useState } from "react";
import { ProjectCarousel } from "../ProjectCarousel";
import { ProjectDetails } from "../ProjectDetails";
import { Section, SectionHeading, Stage, Backdrop, Summary, ExpandButton } from "./style";

export function ProjectsSection({ projects = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandRef = useRef(null);
  const panelId = useId();
  const project = projects[activeIndex] || projects[0];
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
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading><h2 id="projects-heading">Projetos em destaque</h2><p>{projects.every((item) => item.demonstration) ? "Seleção demonstrativa · projetos fictícios" : "Seleção de projetos"}</p></SectionHeading>
      <Stage>
        <Backdrop $variant={project.art} aria-hidden="true">
          {project.image && <img src={project.image} alt="" />}
          <div />
        </Backdrop>
        <Summary>
          <div aria-live="polite" aria-atomic="true">
            <small>{project.demonstration ? "Exemplo · " : ""}{project.category}</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <ExpandButton ref={expandRef} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Fechar projeto ↑" : "Ver projeto ↗"}
          </ExpandButton>
        </Summary>
        <ProjectCarousel projects={projects} activeIndex={activeIndex} onSelect={selectProject} />
      </Stage>
      <ProjectDetails key={project.id} project={project} open={expanded} onClose={close} panelId={panelId} />
    </Section>
  );
}
