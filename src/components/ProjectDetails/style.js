import styled from "styled-components";
import { cardSurface } from "../../styles/glass";
export const DetailDisclosure = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => $open ? "1fr" : "0fr"};
  opacity: ${({ $open }) => $open ? 1 : 0};
  margin-top: ${({ $open }) => $open ? "1rem" : "0"};
  transition:
    grid-template-rows 360ms cubic-bezier(.22, 1, .36, 1),
    opacity 280ms ease-out,
    margin-top 360ms cubic-bezier(.22, 1, .36, 1);
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;
export const DisclosureBody = styled.div`
  min-height: 0;
  overflow: hidden;
`;
export const DetailPanel = styled.div`
  ${cardSurface}
  width: 100%;
  padding: clamp(1.25rem, 4vw, 3rem);
  overflow-wrap: anywhere;
`;
export const DetailHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  small { color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  h3 { margin: .5rem 0 0; font-size: clamp(1.5rem, 3vw, 2rem); }
  button { flex-shrink: 0; min-height: 44px; padding: .65rem 1rem; border-radius: 999px; border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT}; background: #142334; color: inherit; cursor: pointer; }
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; }
`;
export const DetailVisual = styled.figure`
  margin: 2rem 0;
  > div { height: clamp(190px, 26vw, 340px); border-radius: 16px; }
  > div span { font-size: clamp(2rem, 5vw, 5rem); text-align: center; padding: 1rem; }
  figcaption { margin-top: .6rem; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: .875rem; }
`;
export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  h4 { margin: 0 0 .65rem; font-size: 1rem; }
  p, ul { margin: 0; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; font-size: 1rem; }
  ul { padding-left: 1.2rem; }
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 1.5rem; }
`;
export const DetailLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  a { padding: .6rem 0; color: ${({ theme }) => theme.COLORS.ACCENT_HOVER}; }
  span { font-size: .875rem; }
`;
