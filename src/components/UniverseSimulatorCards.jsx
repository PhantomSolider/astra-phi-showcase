import { useState } from "react";
import { ArrowRight, CircleDot, Orbit, Waves } from "lucide-react";
import { simulatorCards } from "../data/concepts.js";

const icons = {
  entropy: Waves,
  gravity: CircleDot,
  orbit: Orbit,
  blackhole: CircleDot,
  galaxy: Orbit,
};

function MiniSimulation({ id }) {
  if (id === "entropy") {
    return (
      <div className="mini-sim entropy-sim" aria-hidden="true">
        <div className="entropy-lattice" />
        <div className="entropy-origin" />
        <div className="entropy-gradient-shell shell-a" />
        <div className="entropy-gradient-shell shell-b" />
        {Array.from({ length: 18 }).map((_, index) => {
          const angle = index * 1.72;
          const distance = 54 + index * 4;
          return (
            <span
              key={index}
              style={{
                "--start-x": `${46 + (index % 5) * 2}%`,
                "--start-y": `${46 + (index % 4) * 2}%`,
                "--tx": `${Math.cos(angle) * distance}px`,
                "--ty": `${Math.sin(angle) * distance}px`,
                "--delay": `${index * -0.12}s`,
              }}
            />
          );
        })}
      </div>
    );
  }

  if (id === "gravity") {
    return (
      <div className="mini-sim gravity-sim" aria-hidden="true">
        <div className="spacetime-grid" />
        <div className="curvature-shadow" />
        <div className="well" />
        <div className="gravity-pull-path" />
        <div className="gravity-source" />
        <div className="falling-dot" />
      </div>
    );
  }

  if (id === "orbit") {
    return (
      <div className="mini-sim orbit-sim" aria-hidden="true">
        <div className="sun" />
        <div className="velocity-vector" />
        <div className="fall-vector" />
        <div className="orbit-ring" />
        <div className="orbit-ring orbit-ring-two" />
        <div className="moon-track">
          <div className="moon" />
        </div>
      </div>
    );
  }

  if (id === "blackhole") {
    return (
      <div className="mini-sim blackhole-sim" aria-hidden="true">
        <div className="photon-field" />
        <div className="lensing-arc lensing-arc-one" />
        <div className="lensing-arc lensing-arc-two" />
        <div className="lensing-arc lensing-arc-three" />
        <div className="horizon" />
        <div className="singularity-shadow" />
        <span className="infall-beam beam-one" />
        <span className="infall-beam beam-two" />
        <span className="infall-beam beam-three" />
      </div>
    );
  }

  return (
    <div className="mini-sim galaxy-sim" aria-hidden="true">
      <svg className="rotation-curve-plot" viewBox="0 0 260 110">
        <path className="curve-axis" d="M28 82 H230 M28 18 V82" />
        <path className="visible-matter-curve" d="M32 72 C76 38 118 48 222 76" />
        <path className="observed-curve" d="M32 72 C76 40 118 36 222 38" />
      </svg>
      <div className="galaxy-core" />
      <div className="galaxy-arm arm-one" />
      <div className="galaxy-arm arm-two" />
      <div className="galaxy-arm arm-three" />
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          style={{
            "--star-x": `${18 + ((index * 19) % 64)}%`,
            "--star-y": `${18 + ((index * 31) % 58)}%`,
            "--star-delay": `${index * -0.21}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function UniverseSimulatorCards() {
  const [activeId, setActiveId] = useState(simulatorCards[0].id);
  const active = simulatorCards.find((card) => card.id === activeId) || simulatorCards[0];

  return (
    <div className="simulator-layout">
      <div className="sim-card-grid" aria-label="Demonstration hall exhibits">
        <div className="hall-intro">
          <span>Choose an exhibit</span>
          <p>Each animation is a symbolic teaching view, not a full simulation.</p>
        </div>
        {simulatorCards.map((card) => {
          const Icon = icons[card.id] || Orbit;

          return (
            <button
              type="button"
              key={card.id}
              className={`glass-card sim-selector ${activeId === card.id ? "active" : ""}`}
              aria-pressed={activeId === card.id}
              onClick={() => setActiveId(card.id)}
            >
              <Icon size={22} aria-hidden="true" />
              <span>{card.title}</span>
              <small>{card.subtitle}</small>
              {activeId === card.id && <em>On display</em>}
            </button>
          );
        })}
      </div>

      <article className="glass-card simulator-stage" aria-live="polite">
        <MiniSimulation id={active.id} />
        <div className="sim-copy">
          <p className="eyebrow">Concept exhibit</p>
          <h3>{active.title}</h3>
          <h4>{active.subtitle}</h4>
          <p>{active.body}</p>
          <div className="sim-placards">
            <div>
              <strong>Notice</strong>
              <p>{active.observe}</p>
            </div>
            <div>
              <strong>Limit</strong>
              <p>{active.limitation}</p>
            </div>
          </div>
          <a className="sim-metric" href={active.archiveHref || "#archive"}>
            <span>{active.metric}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
}
