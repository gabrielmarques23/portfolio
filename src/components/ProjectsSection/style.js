import styled from "styled-components";
export const Section = styled.section`
  min-width: 0;
  padding: 3rem clamp(1rem, 3vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;
export const SectionHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .5rem 1.5rem;
  margin-bottom: 1.5rem;
  h2 { margin: 0; font-size: clamp(1.4rem, 2.4vw, 2rem); font-weight: 500; }
  p { margin: 0; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: .875rem; }
`;
export const Stage = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.6fr);
  align-items: center;
  min-height: 410px;
  padding: 2.5rem 0 2.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  border-radius: 28px;
  overflow: hidden;
  @media (max-width: 750px) { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; padding: 1.5rem 0 1.5rem 1rem; }
`;
export const Backdrop = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  background: ${({ $variant }) => $variant === "orbit" ? "linear-gradient(110deg, #0c1825, #182c42)" : $variant === "nexo" ? "linear-gradient(110deg, #101822, #173747)" : "linear-gradient(110deg, #0b1723, #183c61)"};
  img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .24; }
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8, 16, 25, .9), rgba(8, 16, 25, .3)); }
  > div {
    position: absolute; width: 370px; height: 370px; right: 5%; top: -40px;
    border: 45px solid rgba(112, 184, 255, .1);
    box-shadow: 0 0 0 60px rgba(112, 184, 255, .035);
    border-radius: ${({ $variant }) => $variant === "orbit" ? "20%" : $variant === "nexo" ? "5%" : "50%"};
    transform: ${({ $variant }) => $variant === "orbit" ? "rotate(25deg) scaleX(.65)" : $variant === "nexo" ? "translateY(80px) rotate(45deg)" : "rotate(-25deg) scaleX(1.3)"};
    transition: transform .45s, border-radius .45s;
  }
`;
export const Summary = styled.div`
  padding-right: 1.5rem;
  overflow-wrap: anywhere;
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; font-size: .875rem; }
  h3 { font-size: clamp(1.8rem, 3.6vw, 3.3rem); letter-spacing: -.04em; line-height: 1.1; margin: 1rem 0; font-weight: 500; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: 1rem; line-height: 1.75; margin: 0; max-width: 330px; }
`;
export const ExpandButton = styled.button`
  min-height: 44px;
  margin-top: 1.5rem;
  padding: .7rem 1.2rem;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.COLORS.ACCENT};
  color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT};
  font-weight: 600;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
`;
