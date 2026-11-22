import styled from "styled-components";

export const FrameWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 6rem);
  margin: auto;
  border-radius: 52px;
  background:
    radial-gradient(ellipse at 50% 55%, rgba(59, 158, 255, .18), transparent 58%),
    linear-gradient(145deg, #142334, #0a1420 60%, #101e2c);
  border: 1px solid rgba(193, 224, 255, .2);
  box-shadow: 0 32px 100px -32px #000, inset 0 1px 0 rgba(255, 255, 255, .16);
  isolation: isolate;

  @media (max-width: 900px) {
    border-radius: 32px;
    min-height: auto;
  }
`;

export const AmbientGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
  pointer-events: none;
  background:
    linear-gradient(rgba(136, 191, 239, .025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(136, 191, 239, .025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(transparent, #000 55%, transparent);
`;

export const FrameContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
`;
