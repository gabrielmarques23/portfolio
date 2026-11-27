import { css } from "styled-components";

export const glassEffect = css`
  --glass-radius: 45px;
  position: relative;
  box-sizing: border-box;
  isolation: isolate;
  border: none;
  border-radius: var(--glass-radius);
  background: transparent;
  box-shadow: none;
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    box-sizing: border-box;
    border: 1.5px solid rgb(255 255 255 / 15%);
    border-radius: calc(var(--glass-radius) + 1px);
    pointer-events: none;
  }
`;

export const cardSurface = css`
  ${glassEffect}
  --glass-radius: ${({ theme }) => theme.RADII.card};
  min-width: 0;
  padding: ${({ theme }) => theme.SPACE.large};
`;
