import { useEffect, useRef } from "react";
import {
  HeroSection,
  StatusBadge,
  StatusDot,
  HybridTitle,
  TitleLineSans,
  TitleLineSerif,
  Subtitle,
  PortraitMotion
} from "./style";
import { PortraitReveal } from "../PortraitReveal";

export function Hero({ heroData, profileData }) {
  const heroRef = useRef(null);
  const portraitMotionRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const portrait = portraitMotionRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 901px)");
    let frame = 0;
    let scrollEnd = 1;
    let needsMeasurement = true;
    let previousProgress = -1;
    const paint = () => {
      frame = 0;
      const enabled = desktop.matches && !reducedMotion.matches;
      if (needsMeasurement && enabled) {
        const bounds = hero.getBoundingClientRect();
        // Reach the resting position halfway through the Hero's document area.
        scrollEnd = Math.max(1, bounds.top + window.scrollY + bounds.height * .5);
        needsMeasurement = false;
      }
      const progress = enabled ? Math.min(1, Math.max(0, window.scrollY / scrollEnd)) : 1;
      if (progress !== previousProgress) {
        portrait.style.setProperty("--portrait-scroll-progress", progress);
        previousProgress = progress;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const measure = () => {
      needsMeasurement = true;
      schedule();
    };
    const onScroll = () => {
      if (desktop.matches && !reducedMotion.matches) schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    desktop.addEventListener("change", measure);
    reducedMotion.addEventListener("change", measure);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      desktop.removeEventListener("change", measure);
      reducedMotion.removeEventListener("change", measure);
      portrait.style.removeProperty("--portrait-scroll-progress");
    };
  }, []);

  const badgeText = heroData?.badge || profileData?.statusText || "Disponível para novas oportunidades";
  const prefix = heroData?.titlePrefix || "CÓDIGO COM";
  const serif = heroData?.titleSerif || "intenção.";
  const suffix = heroData?.titleSuffix || "EXPERIÊNCIAS COM IDENTIDADE";
  const description =
    heroData?.description ||
    "Combinando arquitetura de software sólida, interatividade fluida e direção visual editorial para criar aplicações web que impressionam e performam.";

  return (
    <HeroSection ref={heroRef}>
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
      <PortraitMotion ref={portraitMotionRef}>
        <PortraitReveal name={profileData?.name || "Gabriel Marques"} />
      </PortraitMotion>
    </HeroSection>
  );
}
