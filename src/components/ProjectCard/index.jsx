import {
  CardContainer,
  MediaPreview,
  CardHeader,
  Tag,
  CardContent,
  ProjectTitle,
  ProjectDescription,
  CardFooter,
  Subtext,
  ActionButton
} from "./style";
import { Code } from "../Icons";

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <CardContainer id="projects" aria-labelledby="project-title">
      <CardHeader>
        <Tag>Projeto em destaque</Tag>
        <Subtext>Interface & desenvolvimento</Subtext>
      </CardHeader>

      <MediaPreview aria-hidden="true">
        <div className="preview-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="window-content">
            <Code size={36} strokeWidth={1.2} />
            <span>Aura Glass</span>
            <small>Explorando interfaces</small>
          </div>
          <div className="window-tiles">
            <span />
            <span />
            <span />
          </div>
        </div>
      </MediaPreview>

      <CardContent>
        <ProjectTitle id="project-title">{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </CardContent>

      <CardFooter>
        <Subtext>Estudo de interface</Subtext>
        <ActionButton
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar GitHub
          <span className="sr-only"> (abre em nova aba)</span>
        </ActionButton>
      </CardFooter>
    </CardContainer>
  );
}
