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
  justify-content: center;
  text-align: center;
  padding: clamp(1.25rem, 2.5vh, 2.25rem) 1rem clamp(0.75rem, 1.8vh, 1.5rem);
  margin: 0 auto;
  max-width: 920px;
  width: 100%;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem 1.5rem;
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
  font-size: 0.875rem;
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
  margin: 0 0 clamp(0.65rem, 1.5vh, 1rem);
  line-height: 1.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
`;

export const TitleLineSans = styled.span`
  font-family: ${({ theme }) => theme.FONTS?.sans || "'Poppins', sans-serif"};
  font-size: clamp(1.3rem, 3.5vw, 3.1rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleLineSerif = styled.span`
  font-family: ${({ theme }) => theme.FONTS?.serif || "'Instrument Serif', serif"};
  font-style: italic;
  font-weight: 400;
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.01em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.ACCENT_GRADIENT_START} 0%,
    ${({ theme }) => theme.COLORS.ACCENT} 45%,
    ${({ theme }) => theme.COLORS.ACCENT_GRADIENT_END} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: .1em .2em;
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-weight: 400;
  letter-spacing: -0.01em;
`;
