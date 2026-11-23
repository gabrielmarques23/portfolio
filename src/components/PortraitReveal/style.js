import styled from "styled-components";

export const Portrait = styled.div`
  position: relative;
  flex-shrink: 0;
  width: min(100%, 500px);
  height: 600px;
  margin: 1.5rem auto 0;
  isolation: isolate;
  overflow: hidden;
  user-select: none;
  -webkit-mask-image: linear-gradient(to top, transparent 15%, black 60%, black 100%);
  mask-image: linear-gradient(to top, transparent 15%, black 60%, black 100%);

  .portrait-fallback, .portrait-trail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .portrait-fallback { object-fit: contain; object-position: center bottom; }
  .portrait-trail { display: none; }

  @media (min-width: 901px) and (hover: hover) and (pointer: fine) {
    @supports ((mask-image: linear-gradient(black, transparent)) or (-webkit-mask-image: linear-gradient(black, transparent))) {
      .portrait-fallback { visibility: hidden; }
      .portrait-trail { display: block; }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
