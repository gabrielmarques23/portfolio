import styled from "styled-components";
import { cardSurface } from "../../styles/glass";

export const CardContainer = styled.button`
  ${cardSurface}
  flex: 0 0 195px;
  padding: 0;
  --glass-radius: 20px;
  overflow: clip;
  overflow-clip-margin: 1px;
  text-align: left;
  color: inherit;
  cursor: pointer;
  scroll-snap-align: start;
  transition: outline-color .2s, transform .2s;
  outline: 1px solid transparent;
  outline-offset: -1px;
  &[aria-pressed="true"] {
    outline-color: ${({ theme }) => theme.COLORS.ACCENT};
    transform: translateY(-4px);
  }
  &:hover { outline-color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.COLORS.ACCENT}; outline-offset: 5px; }
  @media (max-width: 750px) {
    flex-basis: min(clamp(210px, 40vw, 240px), calc(100% - 8px));
    > div:first-child { height: clamp(185px, 34vw, 200px); }
  }
`;

export const CardArt = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 170px;
  overflow: hidden;
  background: ${({ $variant }) => $variant === "orbit"
    ? "repeating-radial-gradient(ellipse at 60% 80%, #193b5c 0 14px, #101e2c 15px 30px)"
    : $variant === "nexo"
      ? "repeating-linear-gradient(135deg, #101e2c 0 30px, #193b5c 31px 60px)"
      : "radial-gradient(circle at 30% 10%, #3B9EFF, #193b5c 55%, #101e2c)"};
  span { font: italic 400 110px 'Creato Display', system-ui, sans-serif; color: #d4ebff; }
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const CardCopy = styled.span`
  display: grid;
  gap: .4rem;
  padding: 1rem;
  small { font-size: .75rem; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; }
  strong { font-size: 1rem; font-weight: 500; }
  @media (max-width: 750px) { small { font-size: .875rem; } }
`;
