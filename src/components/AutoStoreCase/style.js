import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const CaseSection = styled.section`
  &[hidden] { display: none; }
  --case-ink: ${({ theme }) => theme.COLORS.TEXT_COLOR_01};
  --case-muted: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  --case-accent: ${({ theme }) => theme.COLORS.ACCENT_HOVER};
  padding: clamp(3rem, 7vw, 7rem) 10vw 4rem;
  color: var(--case-ink);
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
  @media (max-width: 900px) { padding-inline: clamp(1rem, 5vw, 3rem); }
`;

export const CaseHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: clamp(2rem, 5vw, 5rem);
  .case-label { color: var(--case-accent); font-size: .875rem; }
  h2 { max-width: 24ch; margin: 1rem 0; font-size: clamp(2rem, 3.5vw, 3.5rem); line-height: 1.15; letter-spacing: -.035em; }
  em { font-family: ${({ theme }) => theme.FONTS.serif}; font-style: normal; color: var(--case-accent); }
  p { color: var(--case-muted); max-width: 48ch; margin: 1.5rem 0 0; }
  > img { width: min(26%, 250px); height: auto; border-radius: 12px; }
  @media (max-width: 650px) { align-items: flex-start; flex-direction: column-reverse; > img { width: 150px; } }
`;

export const CaseInformation = styled.section`
  ${glassEffect}
  --glass-radius: 28px;
  padding: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: clamp(2rem, 5vw, 4rem);
  overflow-wrap: anywhere;
  .information-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
  .information-heading h3 { margin: 0; font-size: clamp(1.35rem, 2vw, 1.75rem); }
  button { min-height: 44px; padding: .65rem 1rem; border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; border-radius: 999px; background: transparent; color: inherit; cursor: pointer; }
  button:hover { border-color: var(--case-accent); }
`;

export const Journey = styled.div`
  position: relative;
  [data-motion="true"] & { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); gap: clamp(2rem, 4vw, 4rem); align-items: start; }
`;

export const VisualStage = styled.div`
  display: none;
  [data-motion="true"] & { display: block; position: sticky; top: max(2rem, calc((100vh - 500px) / 2)); }
  .visual-caption { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 1.25rem; background: #18181c; border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; border-bottom: 0; border-radius: 18px 18px 0 0; font-size: .8rem; }
  .visual-caption span:last-child { color: var(--case-muted); }
  .visual-window { position: relative; height: clamp(340px, 42vw, 440px); background: #090909; border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; border-radius: 0 0 18px 18px; overflow: hidden; }
  .visual-note { color: var(--case-muted); font-size: .8rem; margin: .8rem 0 0; }
`;

export const Scene = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  transition: opacity 320ms cubic-bezier(.22, 1, .36, 1), transform 420ms cubic-bezier(.22, 1, .36, 1);
  pointer-events: none;
  &[data-active="true"] { opacity: 1; transform: none; z-index: 1; }
  .scene-label { position: absolute; bottom: 1rem; left: 1.25rem; color: var(--case-accent); font-size: .8rem; }
`;

export const Capture = styled.div`
  position: relative;
  background: #090909;
  border-radius: 12px;
  overflow: hidden;
  img { display: block; width: 100%; height: auto; }
  .capture-closeup { margin: 1rem auto 0; width: min(100%, 768px); border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; border-radius: 10px; }
  ${Scene} & {
    height: 100%;
    border-radius: 0;
    .capture-overview { width: 100%; height: 100%; object-fit: contain; padding: 1rem 1rem 3rem; }
    ${({ $variant }) => $variant === "assistant" && `
      .capture-overview { opacity: .32; }
      .capture-closeup { position: absolute; width: 88%; left: 6%; top: 16%; margin: 0; transform: translateY(calc(10px * (1 - var(--conversation-progress, 0)))) scale(calc(.96 + .04 * var(--conversation-progress, 0))); transform-origin: center; box-shadow: 0 16px 40px rgb(0 0 0 / 30%); }
    `}
    ${({ $variant }) => $variant === "interest" && `
      .capture-overview { width: 62%; object-position: center top; }
      .capture-closeup { position: absolute; width: 60%; right: 3%; bottom: 14%; margin: 0; box-shadow: 0 16px 40px rgb(0 0 0 / 30%); }
    `}
  }
`;

export const Steps = styled.div`min-width: 0;`;

export const Step = styled.article`
  padding: 2rem 0 3rem;
  & + & { border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; }
  .step-copy { max-width: 52ch; }
  .step-label { color: var(--case-accent); font-size: .875rem; }
  h3 { margin: .75rem 0 1rem; font-size: clamp(1.65rem, 2.5vw, 2.5rem); line-height: 1.2; letter-spacing: -.025em; }
  p { margin: 0; color: var(--case-muted); line-height: 1.8; }
  .step-capture { margin: 1.5rem 0 0; }
  figcaption { margin-top: .75rem; color: var(--case-muted); font-size: .8rem; }
  [data-motion="true"] & {
    min-height: ${({ $peak }) => $peak ? "100vh" : "72vh"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 3rem;
    .step-capture { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); }
  }
`;

export const CaseFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  padding-top: 2rem;
  margin-top: 2rem;
  h3 { margin: 0 0 .5rem; font-size: 1.3rem; }
  p { color: var(--case-muted); margin: 0; font-size: .95rem; }
  a { display: inline-flex; align-items: center; min-height: 44px; padding: .75rem 1.25rem; border-radius: 999px; background: ${({ theme }) => theme.COLORS.ACCENT}; color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT}; text-decoration: none; }
  a:hover { background: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
`;
