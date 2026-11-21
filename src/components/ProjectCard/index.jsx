import {
  CardContainer,
  CardHeader,
  Tag,
  CardContent,
  ProjectTitle,
  ProjectDescription,
  CardFooter,
  Subtext,
  ActionButton
} from "./style";

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <CardContainer id="projects" aria-labelledby="project-title">
      <CardHeader>
        <Tag>Projeto em destaque</Tag>
        <Subtext>Interface & desenvolvimento</Subtext>
      </CardHeader>

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
