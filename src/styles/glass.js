import { css } from "styled-components";

export const glassEffect = css`
  position: relative;
  background: transparent;
  backdrop-filter: blur(var(--glass-blur, 5px));
  -webkit-backdrop-filter: blur(var(--glass-blur-webkit, 7px));
  box-shadow: var(--glass-shadow-inset);
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    pointer-events: none;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border: 1px solid var(--glass-border-color, rgba(255, 255, 255, 0.25));
    border-radius: inherit;
    pointer-events: none;
  }
`;
