import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { Picker, Track, Controls, ArrowButton } from "./style";

export function ProjectCarousel({ projects, activeIndex, onSelect }) {
  const trackRef = useRef(null);
  const buttons = useRef([]);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateEdges = () => {
      const start = track.scrollLeft > 1;
      const end = track.scrollLeft + track.clientWidth < track.scrollWidth - 1;
      setEdges((previous) => previous.start === start && previous.end === end ? previous : { start, end });
    };
    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
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
      <Track ref={trackRef} $fadeStart={edges.start} $fadeEnd={edges.end} onKeyDown={onKeyDown} role="group" aria-label="Escolher projeto">
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
