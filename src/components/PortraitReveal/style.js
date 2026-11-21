import styled from "styled-components";

export const Portrait = styled.div`
  --portrait-x: 50%;
  --portrait-y: 50%;
  --portrait-radius: 0px;
  position: relative;
  flex-shrink: 0;
  width: min(100%, 500px);
  height: 600px;
  margin: 1.5rem auto 0;
  isolation: isolate;
  user-select: none;
  -webkit-mask-image: linear-gradient(to top, transparent 15%, black 60%, black 100%);
  mask-image: linear-gradient(to top, transparent 15%, black 60%, black 100%);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    pointer-events: none;
  }
  .portrait-real { visibility: hidden; }

  @media (min-width: 901px) and (hover: hover) and (pointer: fine) {
    @supports ((mask-image: radial-gradient(black, transparent)) or (-webkit-mask-image: radial-gradient(black, transparent))) {
      .portrait-real {
        visibility: visible;
        -webkit-mask-image: radial-gradient(circle at var(--portrait-x) var(--portrait-y), black calc(var(--portrait-radius) * .1), transparent var(--portrait-radius));
        mask-image: radial-gradient(circle at var(--portrait-x) var(--portrait-y), black calc(var(--portrait-radius) * .1), transparent var(--portrait-radius));
      }
      .portrait-avatar {
        -webkit-mask-image: radial-gradient(circle at var(--portrait-x) var(--portrait-y), transparent calc(var(--portrait-radius) * .1), black var(--portrait-radius));
        mask-image: radial-gradient(circle at var(--portrait-x) var(--portrait-y), transparent calc(var(--portrait-radius) * .1), black var(--portrait-radius));
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
