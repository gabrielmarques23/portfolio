import styled from "styled-components";
import { cardSurface } from "../../styles/glass";

export const CardContainer = styled.section`
  ${cardSurface}
  width: min(100%, 380px);
  align-self: flex-end;
  padding: 1.75rem;
  border-radius: 40px;
  background: linear-gradient(145deg, rgba(45, 73, 99, .78), rgba(15, 27, 41, .9));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, .7), inset 0 1px 0 rgba(255, 255, 255, .12);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 900px) {
    width: 100%;
    border-radius: 28px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .75rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  font-size: .875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.ACCENT};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 600;
  letter-spacing: -.03em;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;

export const Subtext = styled.span`
  font-size: .875rem;
  color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: .65rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.COLORS.ACCENT};
  color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT};
  font-size: .875rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.COLORS.ACCENT_HOVER};
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
