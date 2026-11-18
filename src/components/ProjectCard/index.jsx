import {
  CardContainer,
  MediaPreview,
  CardHeader,
  Tag,
  MetricBadge,
  CardContent,
  ProjectTitle,
  ProjectDescription,
  CardFooter,
  Subtext,
  ActionButton
} from "./style";
import { ArrowUpRight, Sparkles } from "../Icons";

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <CardContainer>
      <MediaPreview $gradient={project.gradient}>
        <div className="glow-ring" />
        <div className="pattern-mesh" />
        <Sparkles size={36} color="rgba(255, 255, 255, 0.4)" strokeWidth={1.5} />
      </MediaPreview>

      <CardHeader>
        <Tag>{project.tag || "FEATURED"}</Tag>
        {project.metric && <MetricBadge>{project.metric}</MetricBadge>}
      </CardHeader>

      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </CardContent>

      <CardFooter>
        <Subtext>{project.category || "Design & Development"}</Subtext>
        <ActionButton
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver detalhes de ${project.title}`}
        >
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </ActionButton>
      </CardFooter>
    </CardContainer>
  );
}
