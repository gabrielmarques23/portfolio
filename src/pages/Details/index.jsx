import { useState } from "react";
import { PageContainer, MainContent, CenterStage, CardsFooter } from "./style";
import { Glow } from "../../components/Glow";
import { CanvasFrame } from "../../components/CanvasFrame";
import { Dock } from "../../components/Dock";
import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { ProjectCard } from "../../components/ProjectCard";
import { MetricsCard } from "../../components/MetricsCard";
import { portfolioData } from "../../data/portfolio";
import fotoAvatar from "../../../imagens/fotoAvatar.png";

export function Details() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <PageContainer id="home">
      <Glow />

      <CanvasFrame>
        <Dock items={portfolioData.navigation} />

        <MainContent>
          <TopBar
            categories={portfolioData.categories}
            onSelectCategory={setSelectedCategory}
            ctaText="Fale Comigo"
            ctaHref="mailto:contato.gabmarques@gmail.com"
          />

          <CenterStage>
            <Hero
              heroData={portfolioData.hero}
              profileData={portfolioData.profile}
            />
          </CenterStage>

          <CardsFooter data-category={selectedCategory}>
            <MetricsCard
              profile={portfolioData.profile}
              metrics={portfolioData.metrics}
              stack={portfolioData.stack}
              avatarSrc={fotoAvatar}
            />

            <ProjectCard project={portfolioData.featuredProject} />
          </CardsFooter>
        </MainContent>
      </CanvasFrame>
    </PageContainer>
  );
}
