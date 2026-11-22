import styled from "styled-components";
export const Picker = styled.div`min-width: 0;`;
export const Track = styled.div`
  --edge-fade: 26px;
  --edge-color-start: ${({ $fadeStart }) => $fadeStart ? "transparent" : "#000"};
  --edge-color-end: ${({ $fadeEnd }) => $fadeEnd ? "transparent" : "#000"};
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #3b6386 transparent;
  padding: .75rem calc(var(--edge-fade) + 8px) 1rem;
  scroll-padding-inline: calc(var(--edge-fade) + 8px);
  -webkit-mask-image: linear-gradient(to right, var(--edge-color-start), #000 var(--edge-fade), #000 calc(100% - var(--edge-fade)), var(--edge-color-end));
  mask-image: linear-gradient(to right, var(--edge-color-start), #000 var(--edge-fade), #000 calc(100% - var(--edge-fade)), var(--edge-color-end));
  @media (max-width: 600px) { --edge-fade: 16px; }
`;
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: .5rem 1.5rem 0 .5rem;
  > div { display: flex; gap: .5rem; }
  > span { font-size: .875rem; color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02}; }
`;
export const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  border-radius: 50%;
  background: ${({ theme }) => theme.COLORS.SURFACE};
  color: inherit;
  cursor: pointer;
  &:hover { border-color: ${({ theme }) => theme.COLORS.ACCENT}; }
  &:disabled { opacity: .4; cursor: default; }
`;
