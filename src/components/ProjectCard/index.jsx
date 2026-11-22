import { CardContainer, CardArt, CardCopy } from "./style";

export function ProjectCard({ project, selected, onSelect, buttonRef }) {
  return (
    <CardContainer ref={buttonRef} type="button" aria-pressed={selected} onClick={onSelect}>
      <CardArt $variant={project.art} aria-hidden="true">
        {project.image ? <img src={project.image} alt="" loading="lazy" /> : <span>{project.title.slice(0, 1)}</span>}
      </CardArt>
      <CardCopy>
        <small>{project.category}{project.demonstration ? " · Exemplo" : ""}</small>
        <strong>{project.title}</strong>
      </CardCopy>
    </CardContainer>
  );
}
