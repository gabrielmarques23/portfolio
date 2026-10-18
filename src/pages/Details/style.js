import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 2.5rem;
  padding: 1.5rem;
`;

export const Card = styled.div`
  width: min(520px, 100%);
  position: relative;
  padding: 2.2rem 2rem;
  border-radius: 28px;
  background: transparent;
  border: none;

  -webkit-backdrop-filter: blur(18px);

   backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);

  box-shadow:
    inset 1px 1px 2px rgb(255 255 255 / 65%),
    inset -1px -1px 2px rgb(255 255 255 / 25%);
    
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border: 1px solid rgb(255 255 255 / 35%);
    border-radius: 28px;
    pointer-events: none;
  }
`;

 export const Name = styled.h1`
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



