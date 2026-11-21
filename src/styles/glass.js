import { css } from "styled-components";

export const glassEffect = css`
  position: relative;
  isolation: isolate;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const cardSurface = css`
  ${glassEffect}
  min-width: 0;
  padding: ${({ theme }) => theme.SPACE.large};
  border-radius: ${({ theme }) => theme.RADII.card};
  background: ${({ theme }) => theme.COLORS.SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  box-shadow: 0 16px 40px -24px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.04);
`;
