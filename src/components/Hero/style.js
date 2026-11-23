import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

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
    padding: 2rem 1rem;
  }
  @media (max-width: 600px) {
    padding-top: 1.5rem;
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
  margin-bottom: clamp(0.75rem, 1.8vh, 1.25rem);
  backdrop-filter: blur(8px);
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: ${pulse} 2s infinite ease-in-out;
`;

export const HybridTitle = styled.h1`
  max-width: 100%;
  margin: 0 0 clamp(0.65rem, 1.5vh, 1rem);
  line-height: 1.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
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
  @media (max-width: 600px) { font-size: clamp(4rem, 16vw, 6rem); }
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-weight: 400;
  letter-spacing: -0.01em;
  @media (max-width: 600px) { font-size: 1.0625rem; }
`;
