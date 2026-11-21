import {
  PageContainer,
  MainContent,
  CenterStage,
  CardsFooter
} from "./style";
import { CanvasFrame } from "../../components/CanvasFrame";
import { Dock } from "../../components/Dock";
import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { ProjectCard } from "../../components/ProjectCard";
import { MetricsCard } from "../../components/MetricsCard";
import { portfolioData } from "../../data/portfolio";
import fotoPerfil from "../../../imagens/fotoPerfil.jpg";

export function Details() {
  return (
    <PageContainer id="home">
      <a className="skip-link" href="#projects">Pular para o projeto</a>

      <CanvasFrame>
        <Dock items={portfolioData.navigation} />

        <MainContent>
          <TopBar />

          <CenterStage>
            <Hero
              heroData={portfolioData.hero}
              profileData={portfolioData.profile}
            />
          </CenterStage>

          <CardsFooter>
            <ProjectCard project={portfolioData.featuredProject} />
            <MetricsCard
              profile={portfolioData.profile}
              metrics={portfolioData.metrics}
              stack={portfolioData.stack}
              avatarSrc={fotoPerfil}
            />
          </CardsFooter>
        </MainContent>
      </CanvasFrame>
    </PageContainer>
  );
}
