import { HeaderWrapper, Brand, CtaButton } from "./style";

export function TopBar({
  ctaText = "Vamos conversar",
  ctaHref = "mailto:contato.gabmarques@gmail.com"
}) {
  return (
    <HeaderWrapper>
      <Brand href="#home" aria-label="Gabriel Marques — início">
        <span className="logo-symbol" aria-hidden="true">GM</span>
        <span>
          Gabriel Marques
          <small>Desenvolvimento & design</small>
        </span>
      </Brand>
      <CtaButton href={ctaHref}>{ctaText}</CtaButton>
    </HeaderWrapper>
  );
}
