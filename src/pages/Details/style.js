import styled from "styled-components";
import { sectionContent, darkSectionSurface } from "../../styles/sections";

export const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: clamp(.75rem, 3vw, 3rem);
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  .skip-link { position: fixed; top: 1rem; left: 1rem; z-index: 100; padding: 1rem; border-radius: 12px; background: #18181c; transform: translateY(-200%); }
  .skip-link:focus { transform: translateY(0); }
  @media (max-width: 900px) { padding-bottom: calc(7rem + env(safe-area-inset-bottom)); }
`;
export const MainContent = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`;
export const HeroEnvironment = styled.div`
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% 55%, rgba(59, 158, 255, .18), transparent 58%),
    linear-gradient(145deg, #142334, #0a1420 60%, #101e2c);
  &::after {
    content: '';
    display: block;
    height: clamp(160px, 20vw, 220px);
    pointer-events: none;
    background: linear-gradient(to bottom,
      rgb(251 252 246 / 0),
      rgb(251 252 246 / .08) 18%,
      rgb(251 252 246 / .35) 48%,
      rgb(251 252 246 / .8) 78%,
      #FBFCF6);
  }
`;
export const CenterStage = styled.div`position: relative; width: 100%;`;
export const AboutSection = styled.section`
  background: #FBFCF6;
  color: #142334;
`;
export const AboutContent = styled.div`
  ${sectionContent}
  min-height: 900px;
  display: grid;
  align-content: center;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  > aside { width: 100%; max-width: 560px; justify-self: end; background: #101e2c; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_01}; }
  @media (max-width: 750px) { grid-template-columns: minmax(0, 1fr); > aside { justify-self: center; } }
`;
export const AboutCopy = styled.div`
  small { display: inline-block; color: #075985; font-size: .875rem; }
  h2 { font-size: clamp(1.9rem, 3.4vw, 3.2rem); line-height: 1.2; font-weight: 500; letter-spacing: -.03em; margin: 1rem 0; }
  p { color: #475569; font-size: 1.125rem; }
  @media (max-width: 600px) { p { font-size: 1.0625rem; } }
  a { display: inline-block; margin-top: .5rem; padding-block: .6rem; color: #075985; }
  a:focus-visible { outline-color: #075985; }
`;
export const ContactSection = styled.section`
  ${darkSectionSurface}
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;
export const ContactContent = styled.div`
  ${sectionContent}
  padding-block: 4rem;
  text-align: center;
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  h2 { font-size: clamp(1.9rem, 3.4vw, 3.2rem); font-weight: 500; line-height: 1.25; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: 1.125rem; }
  @media (max-width: 600px) { p { font-size: 1.0625rem; } }
  > a { display: inline-flex; align-items: center; min-height: 44px; padding: .75rem 1.25rem; border-radius: 999px; background: ${({ theme }) => theme.COLORS.ACCENT}; color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT}; text-decoration: none; font-weight: 500; }
`;
export const Footer = styled.footer`
  ${darkSectionSurface}
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;
export const FooterContent = styled.div`
  ${sectionContent}
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.5rem;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-size: .875rem;
  a { padding-block: .65rem; }
`;
