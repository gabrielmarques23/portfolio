import { useEffect, useLayoutEffect, useRef } from "react";
import { ProjectCard } from "../ProjectCard";
import { Picker, Track, Controls, ArrowButton } from "./style";

export function ProjectCarousel({ projects, activeIndex, onSelect }) {
  const trackRef = useRef(null);
  const buttons = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let fadeWidth = 1;
    const updateEdges = () => {
      const remaining = track.scrollWidth - track.clientWidth - track.scrollLeft;
      // Ease the mask in over the edge distance instead of switching it on after 1px.
      const strength = (distance) => {
        const progress = Math.max(0, Math.min(distance / fadeWidth, 1));
        return progress * progress * (3 - 2 * progress);
      };
      track.style.setProperty("--fade-start", strength(track.scrollLeft));
      track.style.setProperty("--fade-end", strength(remaining));
    };
    const updateGeometry = () => {
      fadeWidth = parseFloat(getComputedStyle(track).getPropertyValue("--edge-fade")) || 1;
      updateEdges();
    };
    updateGeometry();
    track.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateGeometry);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, [projects.length]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const card = buttons.current[activeIndex];
    if (!track || !card) return;
    const start = card.offsetLeft;
    const end = start + card.offsetWidth;
    const buffer = parseFloat(getComputedStyle(track).paddingLeft);
    let left = track.scrollLeft;
    if (start < left + buffer) left = start - buffer;
    else if (end > left + track.clientWidth - buffer) left = end - track.clientWidth + buffer;
    track.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [activeIndex]);

  const step = (direction) => onSelect((activeIndex + direction + projects.length) % projects.length);
  const onKeyDown = (event) => {
    const current = buttons.current.indexOf(event.target);
    if (current < 0) return;
    const next = event.key === "ArrowRight" ? (current + 1) % projects.length
      : event.key === "ArrowLeft" ? (current - 1 + projects.length) % projects.length
        : event.key === "Home" ? 0 : event.key === "End" ? projects.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    onSelect(next);
    buttons.current[next].focus({ preventScroll: true });
  };

  return (
    <Picker>
      <Track ref={trackRef} onKeyDown={onKeyDown} role="group" aria-label="Escolher projeto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} selected={activeIndex === index}
            buttonRef={(node) => { buttons.current[index] = node; }} onSelect={() => onSelect(index)} />
        ))}
      </Track>
      <Controls>
        <div>
          <ArrowButton type="button" onClick={() => step(-1)} aria-label="Projeto anterior" disabled={projects.length < 2}>←</ArrowButton>
          <ArrowButton type="button" onClick={() => step(1)} aria-label="Próximo projeto" disabled={projects.length < 2}>→</ArrowButton>
        </div>
        <span aria-live="polite" aria-atomic="true">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </Controls>
    </Picker>
  );
}
