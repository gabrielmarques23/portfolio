import { useEffect, useRef } from "react";
import avatar from "../../../imagens/fotoAvatar.png";
import realPhoto from "../../../imagens/fotoReal.png";
import { Portrait } from "./style";

export function PortraitReveal({ name }) {
  const portraitRef = useRef(null);

  useEffect(() => {
    const element = portraitRef.current;
    const desktop = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const maskSupported = CSS.supports("mask-image", "radial-gradient(black, transparent)") ||
      CSS.supports("-webkit-mask-image", "radial-gradient(black, transparent)");
    if (!maskSupported) return;

    let frame = 0;
    let previousTime = 0;
    let radius = 0;
    let targetRadius = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let active = false;

    const paint = () => {
      element.style.setProperty("--portrait-x", `${x}px`);
      element.style.setProperty("--portrait-y", `${y}px`);
      element.style.setProperty("--portrait-radius", `${radius}px`);
    };
    const animate = (time) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const ease = 1 - Math.exp(-elapsed / 65);
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      radius += (targetRadius - radius) * ease;
      const settled = Math.abs(targetX - x) < .1 && Math.abs(targetY - y) < .1 &&
        Math.abs(targetRadius - radius) < .1;
      if (settled) {
        x = targetX;
        y = targetY;
        radius = targetRadius;
      }
      paint();
      frame = settled ? 0 : requestAnimationFrame(animate);
      if (settled) previousTime = 0;
    };
    const update = () => {
      if (reducedMotion.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        x = targetX;
        y = targetY;
        radius = targetRadius;
        paint();
      } else if (!frame) {
        frame = requestAnimationFrame(animate);
      }
    };
    const move = (event) => {
      if (!desktop.matches || event.pointerType === "touch") return;
      const bounds = element.getBoundingClientRect();
      targetX = Math.max(0, Math.min(bounds.width, event.clientX - bounds.left));
      targetY = Math.max(0, Math.min(bounds.height, event.clientY - bounds.top));
      targetRadius = Math.min(bounds.width * .2, 92);
      if (!active) {
        x = targetX;
        y = targetY;
        active = true;
      }
      update();
    };
    const leave = () => {
      active = false;
      targetRadius = 0;
      update();
    };
    const preferencesChanged = () => {
      if (!desktop.matches) leave();
      else update();
    };

    element.addEventListener("pointerenter", move);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);
    element.addEventListener("pointercancel", leave);
    desktop.addEventListener("change", preferencesChanged);
    reducedMotion.addEventListener("change", preferencesChanged);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerenter", move);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("pointercancel", leave);
      desktop.removeEventListener("change", preferencesChanged);
      reducedMotion.removeEventListener("change", preferencesChanged);
    };
  }, []);

  return (
    <Portrait ref={portraitRef} role="img" aria-label={`Retrato de ${name}`}>
      <img className="portrait-real" src={realPhoto} alt="" aria-hidden="true" draggable="false" width="765" height="1024" />
      <img className="portrait-avatar" src={avatar} alt="" aria-hidden="true" draggable="false" width="1856" height="2304" />
    </Portrait>
  );
}
