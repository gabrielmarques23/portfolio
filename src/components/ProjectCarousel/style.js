import styled from "styled-components";
export const Picker = styled.div`min-width: 0;`;
export const Track = styled.div`
  --edge-fade: 48px;
  --edge-inset: 34px;
  --fade-start: 0;
  --fade-end: 0;
  --edge-mask: linear-gradient(to right,
    rgb(0 0 0 / calc(1 - var(--fade-start))) 0,
    rgb(0 0 0 / calc(1 - var(--fade-start) * .896)) calc(var(--edge-fade) * .2),
    rgb(0 0 0 / calc(1 - var(--fade-start) * .648)) calc(var(--edge-fade) * .4),
    rgb(0 0 0 / calc(1 - var(--fade-start) * .352)) calc(var(--edge-fade) * .6),
    rgb(0 0 0 / calc(1 - var(--fade-start) * .104)) calc(var(--edge-fade) * .8),
    #000 var(--edge-fade),
    #000 calc(100% - var(--edge-fade)),
    rgb(0 0 0 / calc(1 - var(--fade-end) * .104)) calc(100% - var(--edge-fade) * .8),
    rgb(0 0 0 / calc(1 - var(--fade-end) * .352)) calc(100% - var(--edge-fade) * .6),
    rgb(0 0 0 / calc(1 - var(--fade-end) * .648)) calc(100% - var(--edge-fade) * .4),
    rgb(0 0 0 / calc(1 - var(--fade-end) * .896)) calc(100% - var(--edge-fade) * .2),
    rgb(0 0 0 / calc(1 - var(--fade-end))) 100%);
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #3b6386 transparent;
  padding: .75rem var(--edge-inset) 1rem;
  scroll-padding-inline: var(--edge-inset);
  -webkit-mask-image: var(--edge-mask);
  mask-image: var(--edge-mask);
  @media (max-width: 600px) { --edge-fade: 32px; --edge-inset: 24px; }
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
