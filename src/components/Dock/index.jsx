import { useEffect, useRef, useState } from "react";
import {
  DockContainer,
  ActiveIndicator,
  DockItem,
  Tooltip
} from "./style";
import * as Icons from "../Icons";

export function Dock({ items = [] }) {
  const dockRef = useRef(null);
  const initialHashHandled = useRef(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const dock = dockRef.current;
    const surfaces = [...document.querySelectorAll('[data-dock-tone="light"]')];
    const links = [...dock.querySelectorAll("a")];
    const markedSections = [...document.querySelectorAll("[data-nav-section]")];
    const sections = items.filter((item) => item.href.startsWith("#")).map((item) => ({
      href: item.href,
      element: markedSections.find((section) => section.dataset.navSection === item.id)
        || document.getElementById(item.href.slice(1)),
    })).filter((section) => section.element);
    let frame = 0;
    let currentHref = null;
    const paint = () => {
      frame = 0;
      // Read all geometry before updating colors. Each icon follows the surface
      // beneath it, including when the vertical dock straddles two sections.
      const regions = surfaces.map((surface) => surface.getBoundingClientRect());
      const points = [dock, ...links].map((element) => {
        const bounds = element.getBoundingClientRect();
        return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
      });
      const sectionBounds = sections.map((section) => section.element.getBoundingClientRect());
      const activationLine = window.innerHeight * .4;
      let nextHref = sections[0]?.href || "#home";
      sections.forEach((section, index) => {
        if (sectionBounds[index].top <= activationLine) nextHref = section.href;
      });
      // Keep the final navigation item reachable when Contact is shorter than
      // the viewport. The case study belongs to Projects until Contact begins.
      if (window.scrollY <= 1) nextHref = sections[0]?.href || "#home";
      else if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) {
        nextHref = sections[sections.length - 1]?.href || nextHref;
      }
      [dock, ...links].forEach((element, index) => {
        const { x, y } = points[index];
        const tone = regions.some((region) => x >= region.left && x <= region.right && y >= region.top && y <= region.bottom) ? "light" : "dark";
        if (element.dataset.tone !== tone) element.dataset.tone = tone;
      });
      if (nextHref !== currentHref) {
        currentHref = nextHref;
        setActiveHref(nextHref);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const observer = new ResizeObserver(schedule);
    surfaces.forEach((surface) => observer.observe(surface));
    sections.forEach((section) => observer.observe(section.element));
    observer.observe(dock);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("popstate", schedule);
    window.addEventListener("pageshow", schedule);
    window.addEventListener("load", schedule);
    paint();
    // On a cold document the browser may resolve the hash before React has
    // mounted its target. Repair only that initial top-of-page arrival, leaving
    // restored history positions and later user scrolling to the browser.
    const initialHashFrame = requestAnimationFrame(() => {
      if (initialHashHandled.current) return;
      initialHashHandled.current = true;
      const navigation = performance.getEntriesByType("navigation")[0];
      if (navigation?.type === "back_forward" || window.scrollY !== 0 || !window.location.hash) return;
      let targetId;
      try { targetId = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        schedule();
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(initialHashFrame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("popstate", schedule);
      window.removeEventListener("pageshow", schedule);
      window.removeEventListener("load", schedule);
    };
  }, [items]);

  const activeIndex = items.findIndex(
    (item) => item.href.startsWith("#") && activeHref === item.href
  );

  return (
    <DockContainer ref={dockRef} aria-label="Navegação rápida">
      <ActiveIndicator
        aria-hidden="true"
        $visible={activeIndex >= 0}
        style={{ "--active-index": Math.max(0, activeIndex) }}
      />
      {items.map((item) => {
        const Icon = Icons[item.icon] || Icons.Home;
        const isActive = item.href.startsWith("#") && activeHref === item.href;

        return (
          <DockItem
            key={item.id}
            href={item.href}
            $active={isActive}
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
