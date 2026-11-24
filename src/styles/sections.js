import { css } from "styled-components";

// Keep each surface full width; reserve dock clearance only inside its content.
export const sectionContent = css`
  width: 100%;
  min-width: 0;
  padding: 3rem clamp(1rem, 3vw, 3rem);
  padding-left: calc(5.5rem + clamp(1rem, 3vw, 3rem));
  @media (max-width: 900px) {
    padding-left: clamp(1rem, 3vw, 3rem);
  }
`;

export const darkSectionSurface = css`
  background: linear-gradient(145deg, #142334, #0a1420 60%, #101e2c);
`;
