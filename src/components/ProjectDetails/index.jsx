import { CardArt } from "../ProjectCard/style";
import { DetailDisclosure, DisclosureBody, DetailPanel, DetailHeading, DetailVisual, Columns, DetailLinks } from "./style";

export function ProjectInformation({ project }) {
  return (
    <>
      <Columns>
        <div><h4>O desafio</h4><p>{project.challenge}</p></div>
        <div><h4>A solução</h4><p>{project.solution}</p></div>
        <div><h4>Tecnologias</h4><ul>{project.technologies?.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
      </Columns>
      {project.links?.length > 0 && <DetailLinks aria-label="Links do projeto">{project.links.filter((link) => /^https?:\/\//.test(link.href)).map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗ <span>(abre em nova aba)</span></a>
      ))}</DetailLinks>}
    </>
  );
}

export function ProjectDetails({ project, open, onClose, panelId }) {
  return (
    <DetailDisclosure id={panelId} $open={open} role="region" aria-labelledby={`${panelId}-title`}
      aria-hidden={!open} inert={open ? undefined : ""}
      onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); onClose(); } }}>
      <DisclosureBody>
      <DetailPanel>
      <DetailHeading>
        <div><small>{project.demonstration ? "Por dentro do exemplo" : "Por dentro do projeto"}</small><h3 id={`${panelId}-title`}>{project.title}</h3></div>
        <button type="button" onClick={onClose}>Fechar detalhes ↑</button>
      </DetailHeading>
      <DetailVisual>
        <CardArt $variant={project.art} aria-hidden="true">
          {project.image ? <img src={project.image} alt="" loading="lazy" /> : <span>{project.title}</span>}
        </CardArt>
        {project.demonstration && <figcaption>Composição ilustrativa de um projeto fictício.</figcaption>}
      </DetailVisual>
      <ProjectInformation project={project} />
      </DetailPanel>
      </DisclosureBody>
    </DetailDisclosure>
  );
}
