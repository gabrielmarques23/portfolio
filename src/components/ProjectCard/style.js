import styled from "styled-components";
import { cardSurface } from "../../styles/glass";

export const CardContainer = styled.button`
  ${cardSurface}
  flex: 0 0 195px;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
  text-align: left;
  color: inherit;
  cursor: pointer;
  scroll-snap-align: start;
  transition: border-color .2s, transform .2s;
  &[aria-pressed="true"] {
    border-color: ${({ theme }) => theme.COLORS.ACCENT};
    transform: translateY(-4px);
  }
  &:hover { border-color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  @media (max-width: 600px) { flex-basis: 180px; }
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
  span { font: italic 110px 'Instrument Serif', Georgia, serif; color: #d4ebff; }
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const CardCopy = styled.span`
  display: grid;
  gap: .4rem;
  padding: 1rem;
  small { font-size: .75rem; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; }
  strong { font-size: 1rem; font-weight: 500; }
`;
