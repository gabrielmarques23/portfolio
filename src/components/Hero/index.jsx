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
  const badgeText = heroData?.badge || profileData?.statusText || "Available for select opportunities";
  const prefix = heroData?.titlePrefix || "A NEW WAY OF";
  const serif = heroData?.titleSerif || "Building";
  const suffix = heroData?.titleSuffix || "DIGITAL EXPERIENCES";
  const description =
    heroData?.description ||
    "Combinando arquitetura de software sólida, interatividade fluida e direção visual editorial para criar aplicações web que impressionam e performam.";

  return (
    <HeroSection>
      <StatusBadge>
        <StatusDot />
        <span>{badgeText}</span>
      </StatusBadge>

      <HybridTitle>
        <TitleLineSans>{prefix}</TitleLineSans>
        <TitleLineSerif>{serif}</TitleLineSerif>
        <TitleLineSans>{suffix}</TitleLineSans>
      </HybridTitle>

      <Subtitle>{description}</Subtitle>
    </HeroSection>
  );
}
