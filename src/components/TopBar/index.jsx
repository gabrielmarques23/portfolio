import { HeaderWrapper, Brand, CtaButton, HeaderInset } from "./style";

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
      <HeaderInset>
        <span>PORTFÓLIO</span>
        Desenvolvimento & design
      </HeaderInset>
      <CtaButton href={ctaHref}>{ctaText}</CtaButton>
    </HeaderWrapper>
  );
}
