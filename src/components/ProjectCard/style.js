import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const CardContainer = styled.article`
  width: 100%;
  max-width: 360px;
  border-radius: 26px;
  padding: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${glassEffect}
  background: rgba(22, 22, 28, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 122, 26, 0.35);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const MediaPreview = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 18px;
  overflow: hidden;
  background: ${({ $gradient }) =>
    $gradient || "linear-gradient(135deg, rgba(89, 0, 213, 0.4) 0%, rgba(255, 122, 26, 0.3) 100%)"};
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;

  .glow-ring {
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 122, 26, 0.6) 0%, transparent 70%);
    filter: blur(20px);
  }

  .pattern-mesh {
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px);
    background-size: 14px 14px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  background: rgba(255, 122, 26, 0.12);
  border: 1px solid rgba(255, 122, 26, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
`;

export const MetricBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  letter-spacing: -0.01em;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE};
  letter-spacing: -0.02em;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`;

export const Subtext = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: #fff;
    transform: scale(1.1) rotate(45deg);
  }
`;
