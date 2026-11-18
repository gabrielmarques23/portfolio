import { useState } from "react";
import { DockContainer, DockItem, Tooltip } from "./style";
import * as Icons from "../Icons";

export function Dock({ items = [] }) {
  const [activeItem, setActiveItem] = useState(items[0]?.id || "home");

  return (
    <DockContainer aria-label="Navegação rápida">
      {items.map((item) => {
        const IconComponent = Icons[item.icon] || Icons.Home;
        const isActive = activeItem === item.id;

        return (
          <DockItem
            key={item.id}
            href={item.href}
            $active={isActive}
            onClick={() => setActiveItem(item.id)}
            aria-label={item.label}
          >
            <IconComponent size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            <Tooltip>{item.label}</Tooltip>
          </DockItem>
        );
      })}
    </DockContainer>
  );
}
