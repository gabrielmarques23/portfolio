import {
  HeroSection,
  StatusBadge,
  StatusDot,
  HybridTitle,
  TitleLineSans,
  TitleLineSerif,
  Subtitle
} from "./style";

export function Hero({ heroData, profileData }) {
  const badgeText = heroData?.badge || profileData?.statusText || "Disponível para novas oportunidades";
  const prefix = heroData?.titlePrefix || "CÓDIGO COM";
  const serif = heroData?.titleSerif || "intenção.";
  const suffix = heroData?.titleSuffix || "EXPERIÊNCIAS COM IDENTIDADE";
  const description =
    heroData?.description ||
    "Combinando arquitetura de software sólida, interatividade fluida e direção visual editorial para criar aplicações web que impressionam e performam.";

  return (
    <HeroSection>
      {profileData?.available && (
        <StatusBadge>
          <StatusDot aria-hidden="true" />
          <span>{badgeText}</span>
        </StatusBadge>
      )}

      <HybridTitle>
        <TitleLineSans>{prefix}</TitleLineSans>
        <TitleLineSerif>{serif}</TitleLineSerif>
        <TitleLineSans>{suffix}</TitleLineSans>
      </HybridTitle>

      <Subtitle>{description}</Subtitle>
    </HeroSection>
  );
}
