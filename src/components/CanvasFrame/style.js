import styled from "styled-components";

export const FrameWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 6rem);
  margin: auto;
  border-radius: 52px;
  border: 1px solid rgba(193, 224, 255, .2);
  box-shadow: 0 32px 100px -32px #000, inset 0 1px 0 rgba(255, 255, 255, .16);
  isolation: isolate;
  overflow: hidden;

  @media (max-width: 900px) {
    border-radius: 32px;
    min-height: auto;
  }
`;

export const FrameContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
`;
