import styled from "styled-components";
import { cardSurface } from "../../styles/glass";

export const CardContainer = styled.section`
  ${cardSurface}
  flex: 1.55;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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

export const MediaPreview = styled.div`
  display: grid;
  place-items: center;
  min-height: 240px;
  padding: 1.75rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  border-radius: 16px;
  overflow: hidden;
  background: radial-gradient(ellipse at 30% 0%, rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .16), transparent 70%), linear-gradient(135deg, #182636, #111923);
  .preview-window {
    width: min(100%,320px);
    padding: 1rem;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 16px;
    background: rgba(255,255,255,.04);
    box-shadow: 0 20px 40px rgba(0,0,0,.25);
  }
  .window-bar {
    display: flex;
    gap: 5px;
  }
  .window-bar i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(255,255,255,.3);
  }
  .window-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .15rem;
    padding: 1rem;
  }
  .window-content svg {
    color: ${({ theme }) => theme.COLORS.ACCENT};
    margin-bottom: .4rem;
  }
  .window-content span {
    font-family: ${({ theme }) => theme.FONTS.serif};
    font-size: 2rem;
  }
  .window-content small {
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  }
  .window-tiles {
    display: flex;
    gap: .5rem;
  }
  .window-tiles span {
    height: 24px;
    flex: 1;
    border-radius: 6px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.06);
  }
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
  line-height: 1.7;
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
  border-radius: ${({ theme }) => theme.RADII.control};
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
