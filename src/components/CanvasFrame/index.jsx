import { FrameWrapper, FrameContent } from "./style";

export function CanvasFrame({ children, ...props }) {
  return (
    <FrameWrapper {...props}>
      <FrameContent>{children}</FrameContent>
    </FrameWrapper>
  );
}
