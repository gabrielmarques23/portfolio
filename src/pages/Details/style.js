import styled from "styled-components";

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
  padding-left: 5.5rem;
  @media (max-width: 900px) { padding-left: 0; }
`;
export const CenterStage = styled.div`position: relative; width: 100%;`;
export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  padding: 3rem clamp(1rem, 3vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  > aside { width: 100%; max-width: 560px; justify-self: end; }
  @media (max-width: 750px) { grid-template-columns: minmax(0, 1fr); > aside { justify-self: center; } }
`;
export const AboutCopy = styled.div`
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; font-size: .875rem; }
  h2 { font-size: clamp(1.7rem, 3vw, 2.8rem); line-height: 1.2; font-weight: 500; letter-spacing: -.03em; margin: 1rem 0; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; }
  a { display: inline-block; margin-top: .5rem; padding-block: .6rem; color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
`;
export const ContactSection = styled.section`
  padding: 4rem clamp(1rem, 3vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  text-align: center;
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  h2 { font-size: clamp(1.7rem, 3vw, 2.8rem); font-weight: 500; line-height: 1.25; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; }
  > a { display: inline-flex; align-items: center; min-height: 44px; padding: .75rem 1.25rem; border-radius: 999px; background: ${({ theme }) => theme.COLORS.ACCENT}; color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT}; text-decoration: none; font-weight: 600; }
`;
export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem clamp(1rem, 3vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-size: .875rem;
  a { padding-block: .65rem; }
`;
