import styled from "styled-components";

export const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  .skip-link { position: fixed; top: 1rem; left: 1rem; z-index: 100; padding: 1rem; border-radius: 12px; background: #18181c; transform: translateY(-200%); }
  .skip-link:focus { transform: translateY(0); }
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
`;
export const CenterStage = styled.div`position: relative; width: 100%;`;
export const AboutSection = styled.section.attrs({ "data-dock-tone": "light" })`
  background: #FBFCF6;
  color: #142334;
`;
export const AboutContent = styled.div`
  width: 100%;
  min-width: 0;
  padding: 3rem 4vw;
  min-height: 900px;
  display: grid;
  align-content: center;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  > aside { --metrics-muted: #475569; --metrics-divider: rgb(20 35 52 / 12%); width: 100%; max-width: 560px; justify-self: end; color: #142334; background: rgb(20 35 52 / 7%); box-shadow: 0 12px 32px -12px rgb(20 35 52 / 18%); }
  > aside::after { border-color: rgb(20 35 52 / 18%); }
  @media (min-width: 900px) { padding: 3rem 10vw; }
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
export const ContactSection = styled.section.attrs({ "data-dock-tone": "light" })`
  background: #FBFCF6;
  color: #142334;
  border-top: 1px solid rgb(20 35 52 / 12%);
`;
export const ContactContent = styled.div`
  width: 100%;
  min-width: 0;
  padding: 4rem 2rem;
  text-align: center;
  small { color: #075985; }
  h2 { font-size: clamp(1.9rem, 3.4vw, 3.2rem); font-weight: 500; line-height: 1.25; }
  p { color: #475569; font-size: 1.125rem; }
  @media (max-width: 600px) { p { font-size: 1.0625rem; } }
  > a { display: inline-flex; align-items: center; min-height: 44px; padding: .75rem 1.25rem; border-radius: 999px; background: ${({ theme }) => theme.COLORS.ACCENT}; color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT}; text-decoration: none; font-weight: 500; }
  > a:focus-visible { outline-color: #075985; }
`;
export const Footer = styled.footer.attrs({ "data-dock-tone": "light" })`
  background: #FBFCF6;
  color: #142334;
  border-top: 1px solid rgb(20 35 52 / 12%);
`;
export const FooterContent = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem clamp(1rem, 3vw, 3rem);
  text-align: center;
  color: #475569;
  font-size: .875rem;
  a { padding-block: .65rem; color: #075985; }
  a:focus-visible { outline-color: #075985; }
  @media (max-width: 900px) {
    padding-bottom: calc(7rem + env(safe-area-inset-bottom));
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: .75rem;
  }
`;
