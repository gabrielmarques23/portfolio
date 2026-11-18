import { useState } from "react";
import { HeaderWrapper, Brand, FilterPill, FilterButton, CtaButton } from "./style";
import { ArrowUpRight } from "../Icons";

export function TopBar({ categories = [], onSelectCategory, ctaText = "Fale Comigo", ctaHref = "mailto:contato.gabmarques@gmail.com" }) {
  const [selected, setSelected] = useState(categories[0]?.id || "all");

  const handleSelect = (id) => {
    setSelected(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <HeaderWrapper>
      <Brand>
        <div className="logo-symbol">GM</div>
        <span>Gabriel Marques</span>
      </Brand>

      {categories.length > 0 && (
        <FilterPill aria-label="Filtro de projetos">
          {categories.map((cat) => (
            <FilterButton
              key={cat.id}
              $active={selected === cat.id}
              onClick={() => handleSelect(cat.id)}
            >
              {cat.label}
            </FilterButton>
          ))}
        </FilterPill>
      )}

      <CtaButton href={ctaHref} target="_blank" rel="noopener noreferrer">
        <span>{ctaText}</span>
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </CtaButton>
    </HeaderWrapper>
  );
}
