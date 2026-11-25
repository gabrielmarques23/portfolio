import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 720px;
  padding: 2rem 5rem 0;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1100px) {
    min-height: 670px;
    padding-inline: 4rem;
  }
  @media (max-width: 900px) {
    min-height: 0;
    padding: 10rem 1rem;
  }
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #34d399;
  margin-bottom: clamp(1.25rem, 1.8vh, 1.5rem);
  backdrop-filter: blur(8px);
  @media (max-width: 600px) { margin-bottom: 1rem; }
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
`;

export const HybridTitle = styled.h1`
  max-width: 100%;
  margin: 0 0 1.5rem;
  line-height: 1.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  @media (max-width: 600px) { margin-bottom: 1rem; }
`;

export const TitleLineSans = styled.span`
  font-family: ${({ theme }) => theme.FONTS?.sans || "'Creato Display', system-ui, sans-serif"};
  font-size: clamp(1.25rem, 2.6vw, 2.3rem);
  max-width: 100%;
  text-wrap: balance;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleLineSerif = styled.span`
  font-family: ${({ theme }) => theme.FONTS?.serif || "'Bochan Serif', Georgia, serif"};
  font-style: normal;
  font-weight: 400;
  font-size: clamp(5rem, 10.5vw, 9rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.ACCENT_GRADIENT_START} 0%,
    ${({ theme }) => theme.COLORS.ACCENT} 45%,
    ${({ theme }) => theme.COLORS.ACCENT_GRADIENT_END} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: .1em .2em;
  @media (min-width: 601px) and (max-width: 900px) { line-height: .975; }
  @media (max-width: 600px) { font-size: clamp(2.5rem, 13.5vw, 5.0625rem); }
`;

export const Subtitle = styled.p`
  max-width: min(100%, 50ch);
  text-wrap: pretty;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-weight: 400;
  letter-spacing: -0.01em;
  @media (max-width: 600px) { font-size: 1.0625rem; }
`;

export const PortraitMotion = styled.div`
  flex-shrink: 0;
  width: min(100%, 500px);
  transform: translateY(calc(-6rem * (1 - var(--portrait-scroll-progress, 0))));

  @media (max-width: 900px) { display: none; }
  @media (prefers-reduced-motion: reduce) { transform: none; }
`;
