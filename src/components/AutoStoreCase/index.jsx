import { useEffect, useRef, useState } from "react";
import { ProjectInformation } from "../ProjectDetails";
import { CaseSection, CaseHeader, CaseInformation, Journey, VisualStage, Scene, Steps, Step, Capture, CaseFooter } from "./style";

const base = "/images/autostore/";
const chapters = [
  {
    id: "catalog", label: "Explorar", title: "A escolha começa com clareza.",
    description: "Um catálogo que reúne veículos, categorias e preços em uma visão direta. O primeiro passo é ajudar a pessoa a entender suas opções.",
    detail: "Catálogo de veículos", image: "catalog.jpg", width: 1600, height: 759,
    alt: "Catálogo AutoStore com busca, categorias e cartões de Corolla, Corolla Cross e Hilux.",
  },
  {
    id: "filter", label: "Encontrar", title: "Menos ruído. Opções relevantes.",
    description: "A busca por modelo e o filtro por categoria encurtam o caminho entre explorar o catálogo e encontrar um veículo que faz sentido.",
    detail: "Busca e categorias", image: "filter.jpg", width: 1600, height: 701,
    alt: "Filtro Sedan selecionado, exibindo os modelos Corolla, Virtus e HB20S.",
  },
  {
    id: "assistant", label: "Conversar", title: "O catálogo também responde.",
    description: "O assistente de IA usa os dados do catálogo para contextualizar a conversa. Nesta captura, uma pergunta sobre o Corolla recebe informações de disponibilidade, ano e preço.",
    detail: "Assistente com contexto", image: "assistant.jpg", width: 1600, height: 857,
    alt: "Busca por Corolla ao lado do assistente AutoStore, que responde uma pergunta sobre o veículo.",
    closeup: "conversation.jpg", closeupWidth: 768, closeupHeight: 435,
    closeupAlt: "Detalhe da conversa: o assistente informa que há um Toyota Corolla 2026 a partir de 160 mil reais.",
  },
  {
    id: "interest", label: "Avançar", title: "Da informação ao próximo passo.",
    description: "A página do veículo reúne especificações e um formulário de interesse. Quem encontrou uma opção pode iniciar o contato sem sair do contexto da escolha.",
    detail: "Detalhes e interesse", image: "details.jpg", width: 1260, height: 1280,
    alt: "Página do Corolla com foto, especificações e formulário para registrar interesse.",
    closeup: "interest.jpg", closeupWidth: 540, closeupHeight: 380,
    closeupAlt: "Detalhe do formulário com nome, e-mail ou telefone, mensagem opcional e botão Enviar interesse.",
  },
];

function ChapterCapture({ chapter, decorative = false }) {
  return (
    <Capture $variant={chapter.id}>
      <img className="capture-overview" src={`${base}${chapter.image}`} alt={decorative ? "" : chapter.alt}
        width={chapter.width} height={chapter.height} loading="lazy" decoding="async" />
      {chapter.closeup && <img className="capture-closeup" src={`${base}${chapter.closeup}`}
        alt={decorative ? "" : chapter.closeupAlt} width={chapter.closeupWidth} height={chapter.closeupHeight}
        loading="lazy" decoding="async" />}
    </Capture>
  );
}

export function AutoStoreCase({ project, informationOpen = false, onInformationClose, onCloseComplete }) {
  const sectionRef = useRef(null);
  const [rendered, setRendered] = useState(informationOpen);

  useEffect(() => {
    if (informationOpen) setRendered(true);
  }, [informationOpen]);

  useEffect(() => {
    if (!rendered) return;
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation;
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (informationOpen) {
        section.focus({ preventScroll: true });
        section.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
        if (!reducedMotion.matches) {
          animation = section.animate([
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 1, transform: "none" },
          ], { duration: 440, easing: "cubic-bezier(.22, 1, .36, 1)" });
        }
      } else {
        const finishClose = () => {
          if (cancelled) return;
          setRendered(false);
          onCloseComplete?.();
        };
        if (reducedMotion.matches) finishClose();
        else {
          animation = section.animate([
            { opacity: 1, transform: "none" },
            { opacity: 0, transform: "translateY(6px)" },
          ], { duration: 180, easing: "cubic-bezier(.4, 0, 1, 1)" });
          animation.finished.then(finishClose).catch(() => {});
        }
      }
    });
    const finishMotion = () => { if (reducedMotion.matches) animation?.finish(); };
    reducedMotion.addEventListener("change", finishMotion);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      animation?.cancel();
      reducedMotion.removeEventListener("change", finishMotion);
    };
  }, [informationOpen, rendered, onCloseComplete]);

  useEffect(() => {
    if (!rendered) return;
    const section = sectionRef.current;
    const media = window.matchMedia("(min-width: 1001px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
    const steps = [...section.querySelectorAll("[data-case-step]")];
    const scenes = [...section.querySelectorAll("[data-case-scene]")];
    let frame = 0;
    let active = -1;

    const paint = () => {
      frame = 0;
      const midpoint = window.innerHeight * .5;
      const bounds = steps.map((step) => step.getBoundingClientRect());
      let next = 0;
      bounds.forEach((bound, index) => { if (bound.top <= midpoint) next = index; });
      if (active !== next) {
        scenes.forEach((scene, index) => { scene.dataset.active = String(index === next); });
        steps.forEach((step, index) => { step.dataset.active = String(index === next); });
        active = next;
      }
      const progress = Math.max(0, Math.min(1, (midpoint - bounds[2].top) / (bounds[2].height * .65)));
      section.style.setProperty("--conversation-progress", progress);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      delete section.dataset.motion;
      section.style.removeProperty("--conversation-progress");
      active = -1;
    };
    const configure = () => {
      stop();
      if (!media.matches) return;
      section.dataset.motion = "true";
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      paint();
    };
    configure();
    media.addEventListener("change", configure);
    return () => { stop(); media.removeEventListener("change", configure); };
  }, [rendered]);

  return (
    <CaseSection ref={sectionRef} id="autostore-case" hidden={!rendered}
      aria-hidden={!informationOpen} inert={informationOpen ? undefined : ""} tabIndex={-1}
      aria-labelledby="autostore-heading" onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); onInformationClose?.(); }
      }}>
      <CaseHeader>
        <div>
          <span className="case-label">AutoStore · estudo de caso</span>
          <h2 id="autostore-heading">Do catálogo ao interesse.<br /><em>Uma conversa no caminho.</em></h2>
          <p>Busca, informação e atendimento em uma jornada de escolha de veículos.</p>
        </div>
        <img src={`${base}logo.png`} alt="AutoStore" width="732" height="258" loading="lazy" />
      </CaseHeader>

      {project && <CaseInformation id="autostore-information" aria-labelledby="autostore-information-heading"
        onKeyDown={(event) => {
          if (event.key === "Escape") { event.preventDefault(); onInformationClose?.(); }
        }}>
        <div className="information-heading">
          <h3 id="autostore-information-heading">Por dentro do projeto</h3>
          <button type="button" onClick={onInformationClose}>Fechar informações ↑</button>
        </div>
        <ProjectInformation project={project} />
      </CaseInformation>}

      <Journey>
        <VisualStage aria-hidden="true">
          <div className="visual-caption"><span>AutoStore</span><span>Capturas do projeto</span></div>
          <div className="visual-window">
            {chapters.map((chapter, index) => <Scene key={chapter.id} data-case-scene data-active={index === 0}>
              <ChapterCapture chapter={chapter} decorative />
              <span className="scene-label">{chapter.detail}</span>
            </Scene>)}
          </div>
          <p className="visual-note">Interface apresentada em imagens estáticas.</p>
        </VisualStage>
        <Steps>
          {chapters.map((chapter) => <Step key={chapter.id} data-case-step $peak={chapter.id === "assistant"}>
            <div className="step-copy">
              <span className="step-label">{chapter.label}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
            <figure className="step-capture">
              <ChapterCapture chapter={chapter} />
              <figcaption>{chapter.detail}. Captura do projeto.</figcaption>
            </figure>
          </Step>)}
        </Steps>
      </Journey>

      <CaseFooter>
        <div><h3>Interface e engenharia na mesma jornada.</h3><p>Next.js, TypeScript, Prisma, PostgreSQL e Google Gemini.</p></div>
        <a href="https://github.com/gabrielmarques23/AutoStore" target="_blank" rel="noopener noreferrer">Explorar o código ↗<span className="sr-only"> (abre em nova aba)</span></a>
      </CaseFooter>
    </CaseSection>
  );
}
