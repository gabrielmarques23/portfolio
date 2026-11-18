import { FrameWrapper, AmbientGlow, FrameContent } from "./style";

export function CanvasFrame({ children, ...props }) {
  return (
    <FrameWrapper {...props}>
      <AmbientGlow />
      <FrameContent>{children}</FrameContent>
    </FrameWrapper>
  );
}
