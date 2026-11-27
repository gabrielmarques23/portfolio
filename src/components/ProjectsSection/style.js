import styled from "styled-components";
import { darkSectionSurface } from "../../styles/sections";
import { glassEffect } from "../../styles/glass";
export const Section = styled.section`
  min-width: 0;
  ${darkSectionSurface}
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;
export const SectionContent = styled.div`
  width: 100%;
  min-width: 0;
  padding: 3rem 10vw;
  min-height: 900px;
  display: grid;
  align-content: center;
`;
export const SectionHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .5rem 1.5rem;
  margin-bottom: 1.5rem;
  h2 { margin: 0; font-size: clamp(1.6rem, 2.7vw, 2.3rem); font-weight: 500; }
  p { margin: 0; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: .875rem; }
`;
export const Stage = styled.div`
  ${glassEffect}
  --glass-radius: 28px;
  overflow: clip;
  overflow-clip-margin: 1px;
`;
export const StageOverview = styled.div`
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.6fr);
  align-items: center;
  min-height: 520px;
  padding: 2.5rem 0 2.5rem 2rem;
  @media (max-width: 750px) { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; padding: 1.5rem 0 1.5rem 1rem; }
`;
export const Summary = styled.div`
  .case-study-link { display: block; width: fit-content; padding-block: .65rem; margin-top: .5rem; color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; font-size: .95rem; }
  padding-right: 1.5rem;
  overflow-wrap: anywhere;
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; font-size: .875rem; }
  h3 { font-size: clamp(2rem, 4vw, 3.7rem); letter-spacing: -.04em; line-height: 1.1; margin: 1rem 0; font-weight: 500; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: 1.125rem; line-height: 1.75; margin: 0; max-width: 330px; }
  @media (max-width: 600px) { p { font-size: 1.0625rem; } }
`;
export const ExpandButton = styled.button`
  min-height: 44px;
  margin-top: 1.5rem;
  padding: .7rem 1.2rem;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.COLORS.ACCENT};
  color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT};
  font-weight: 500;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
`;
