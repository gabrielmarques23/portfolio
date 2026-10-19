import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 2.5rem;
  padding: 1.5rem;
`;

export const Card = styled.div`
 box-sizing: border-box;
  width: min(562px, 100%);
  position: relative;
  padding: 2.2rem 2rem;
  border-radius: 25px;
  border: none;
  background: transparent;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7px);

  box-shadow:
    inset 1px 1px 2px rgb(255 255 255 / 15%),
    inset -1px -1px 3px rgb(255 255 255 / 10%),
    inset 0 0 12px rgb(255 255 255 / 10%);

  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    pointer-events: none;

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border: 1px solid rgb(255 255 255 / 25%);
    border-radius: 26px;
    pointer-events: none;
  }
`;

export const Name = styled.h1`
  position: relative;
  z-index: 1;
  display: grid;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(3.2rem, 13vw, 10rem);
  font-weight: 800;
  line-height: 0.95;
  color: transparent;
  -webkit-text-stroke: .7px #ffffff83;
`;

const Photo = styled.img`
  position: absolute;
  bottom: 10;
  height: 80%;
  max-width: 38%;
  object-fit: cover;
  opacity: 0.55;
  -webkit-mask-image: linear-gradient(to top, transparent 0%, #00000000 30%);
  mask-image: linear-gradient(to top, transparent 0%, #000 30%);
`;

export const PhotoLeft = styled(Photo)`
  left: 0;
`;

export const PhotoRight = styled(Photo)`
  right: 0;
`;



