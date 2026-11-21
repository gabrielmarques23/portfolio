import { useEffect, useState } from "react";
import {
  DockContainer,
  ActiveIndicator,
  DockItem,
  Tooltip
} from "./style";
import * as Icons from "../Icons";

export function Dock({ items = [] }) {
  const [location, setLocation] = useState(
    () => window.location.hash || "#home"
  );

  useEffect(() => {
    const updateLocation = () => setLocation(window.location.hash || "#home");

    window.addEventListener("hashchange", updateLocation);
    return () => window.removeEventListener("hashchange", updateLocation);
  }, []);

  const activeIndex = items.findIndex(
    (item) => item.href.startsWith("#") && location === item.href
  );

  return (
    <DockContainer aria-label="Navegação rápida">
      <ActiveIndicator
        aria-hidden="true"
        $visible={activeIndex >= 0}
        style={{ "--active-index": Math.max(0, activeIndex) }}
      />
      {items.map((item) => {
        const Icon = Icons[item.icon] || Icons.Home;
        const isActive = item.href.startsWith("#") && location === item.href;

        return (
          <DockItem
            key={item.id}
            href={item.href}
            $active={isActive}
            onClick={(event) => {
              if (
                item.href.startsWith("#") &&
                event.button === 0 &&
                !event.metaKey &&
                !event.ctrlKey &&
                !event.shiftKey &&
                !event.altKey
              ) {
                setLocation(item.href);
              }
            }}
            aria-current={isActive ? "location" : undefined}
            aria-label={item.label}
          >
            <Icon
              size={20}
              strokeWidth={isActive ? 2.2 : 1.8}
              aria-hidden="true"
            />
            <Tooltip aria-hidden="true">{item.label}</Tooltip>
          </DockItem>
        );
      })}
    </DockContainer>
  );
}
