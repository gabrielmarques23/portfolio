import styled from "styled-components";

export const FrameWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  isolation: isolate;
  overflow: hidden;

`;

export const FrameContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
`;
