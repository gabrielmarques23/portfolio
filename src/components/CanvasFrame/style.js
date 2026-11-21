import styled from "styled-components";

export const FrameWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1360px;
  min-height: calc(100vh - 2.5rem);
  height: auto;
  margin: auto;
  border-radius: 40px;
  background: 
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 158, 255, 0.14) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 90% 90%, rgba(22, 117, 232, 0.1) 0%, transparent 60%),
    #0c1017;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 
    0 24px 80px -12px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.04),
    inset 0 1px 2px rgba(255, 255, 255, 0.1);
  overflow: visible;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 900px) {
    min-height: calc(100vh - 1.5rem);
    padding: 1.25rem 1.25rem 1.75rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    border-radius: 28px;
    padding: 1rem 0.85rem 1.25rem;
  }
`;

export const AmbientGlow = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  height: 450px;
  background: radial-gradient(circle, rgba(59, 158, 255, 0.08) 0%, rgba(22, 117, 232, 0.12) 40%, transparent 70%);
  pointer-events: none;
  filter: blur(60px);
  z-index: 0;
`;

export const FrameContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;
