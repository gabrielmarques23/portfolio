import { useEffect, useId, useRef } from "react";
import avatar from "../../../imagens/fotoAvatar.png";
import realPhoto from "../../../imagens/fotoReal.png";
import { Portrait } from "./style";

const TRAIL_LIFETIME = 800;

// Rounded, connected outline: one ribbon, including during fast pointer movement.
function ribbonPath(points, time, reducedMotion) {
  if (points.length < 2) return "";
  const left = [];
  const right = [];
  points.forEach((point, index) => {
    const previous = points[Math.max(0, index - 1)];
    const next = points[Math.min(points.length - 1, index + 1)];
    const length = Math.hypot(next.x - previous.x, next.y - previous.y) || 1;
    const normalX = -(next.y - previous.y) / length;
    const normalY = (next.x - previous.x) / length;
    const life = reducedMotion ? 1 : Math.max(0, 1 - (time - point.time) / TRAIL_LIFETIME);
    const position = index / (points.length - 1);
    const taper = Math.sin(Math.PI * position) ** .65;
    const closure = life * life * (3 - 2 * life);
    const width = (2 + 25 * taper) * closure;
    left.push({ x: point.x + normalX * width, y: point.y + normalY * width });
    right.push({ x: point.x - normalX * width, y: point.y - normalY * width });
  });
  const outline = [...left, ...right.reverse()];
  const midpoint = (a, b) => `${(a.x + b.x) / 2} ${(a.y + b.y) / 2}`;
  let path = `M ${midpoint(outline[outline.length - 1], outline[0])}`;
  outline.forEach((point, index) => {
    path += ` Q ${point.x} ${point.y} ${midpoint(point, outline[(index + 1) % outline.length])}`;
  });
  return `${path} Z`;
}

export function PortraitReveal({ name }) {
  const portraitRef = useRef(null);
  const photoPathRef = useRef(null);
  const avatarPathRef = useRef(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const element = portraitRef.current;
    const desktop = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let points = [];
    let active = false;
    let lastPosition = null;
    const paint = (path) => {
      photoPathRef.current.setAttribute("d", path);
      avatarPathRef.current.setAttribute("d", path);
    };
    const animate = (time) => {
      points = points.filter((point) => time - point.time < TRAIL_LIFETIME);
      paint(ribbonPath(points, time, false));
      frame = points.length > 1 ? requestAnimationFrame(animate) : 0;
      if (!frame) points = [];
    };
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      lastPosition = null;
      paint("");
    };
    const move = (event) => {
      if (!desktop.matches || event.pointerType === "touch") return;
      const bounds = element.getBoundingClientRect();
      const current = {
        x: Math.max(0, Math.min(500, (event.clientX - bounds.left) * 500 / bounds.width)),
        y: Math.max(0, Math.min(600, (event.clientY - bounds.top) * 600 / bounds.height)),
        time: performance.now(),
      };
      active = true;
      if (reducedMotion.matches) {
        // A short stationary cut, with no animated tail or deformation.
        paint(ribbonPath([{ ...current, x: current.x - 20 }, current,
          { ...current, x: current.x + 20 }], current.time, true));
        lastPosition = current;
        return;
      }
      const previous = lastPosition || current;
      const distance = Math.hypot(current.x - previous.x, current.y - previous.y);
      if (!lastPosition) {
        // A fresh entry starts a separate cut, never a bridge to the old tail.
        points = [current];
        paint("");
      }
      else if (distance >= 2) {
        // Fill long segments so quick gestures stay a continuous, tapered cut.
        const steps = Math.min(16, Math.ceil(distance / 10));
        for (let step = 1; step <= steps; step += 1) {
          const progress = step / steps;
          points.push({ x: previous.x + (current.x - previous.x) * progress,
            y: previous.y + (current.y - previous.y) * progress,
            time: previous.time + (current.time - previous.time) * progress });
        }
        points = points.slice(-64);
      }
      if (!lastPosition || distance >= 2) lastPosition = current;
      if (!frame && points.length > 1) frame = requestAnimationFrame(animate);
    };
    const leave = () => {
      active = false;
      lastPosition = null;
      if (reducedMotion.matches) clear();
      // Existing sections finish closing naturally; no new trail is emitted.
    };
    const preferencesChanged = () => {
      const previous = lastPosition;
      clear();
      if (desktop.matches && reducedMotion.matches && active && previous) {
        paint(ribbonPath([{ ...previous, x: previous.x - 20 }, previous,
          { ...previous, x: previous.x + 20 }], previous.time, true));
      }
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
      <img className="portrait-fallback" src={avatar} alt="" aria-hidden="true" draggable="false" width="1856" height="2304" />
      <svg className="portrait-trail" viewBox="0 0 500 600" aria-hidden="true">
        <defs>
          <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <mask id={`${id}-photo`} maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="600" style={{ maskType: "luminance" }}>
            <rect width="500" height="600" fill="black" />
            <path ref={photoPathRef} fill="white" filter={`url(#${id}-soft)`} />
          </mask>
          <mask id={`${id}-avatar`} maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="600" style={{ maskType: "luminance" }}>
            <rect width="500" height="600" fill="white" />
            <path ref={avatarPathRef} fill="black" filter={`url(#${id}-soft)`} />
          </mask>
        </defs>
        <image href={realPhoto} width="500" height="600" preserveAspectRatio="xMidYMax meet" mask={`url(#${id}-photo)`} />
        <image href={avatar} width="500" height="600" preserveAspectRatio="xMidYMax meet" mask={`url(#${id}-avatar)`} />
      </svg>
    </Portrait>
  );
}
