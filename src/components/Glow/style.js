import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
`;

const Blob = styled.span`
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
`;

export const Orange = styled(Blob)`
  width: 46vw;
  height: 46vw;
  left: 27vw;
  top: 8vh;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  opacity: 0.38;
`;

export const Blue = styled(Blob)`
  width: 50vw;
  height: 50vw;
  left: -10vw;
  top: 40vh;
  background: ${({ theme }) => theme.COLORS.BLUE_GLOW};
  opacity: 0.55;
`;
