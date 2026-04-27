import { useState } from "react";
import { ArrowRight, Atom, CircleDot, Orbit, RadioTower, Waves } from "lucide-react";
import { simulatorCards } from "../data/concepts.js";

const icons = {
  entropy: Waves,
  gravity: CircleDot,
  orbit: Orbit,
  blackhole: RadioTower,
  galaxy: Atom,
};

function MiniSimulation({ id }) {
  if (id === "entropy") {
    return (
      <div className="mini-sim entropy-sim" aria-hidden="true">
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
        <div className="well" />
        <div className="falling-dot" />
      </div>
    );
  }

  if (id === "orbit") {
    return (
      <div className="mini-sim orbit-sim" aria-hidden="true">
        <div className="sun" />
        <div className="orbit-ring" />
        <div className="moon" />
      </div>
    );
  }

  if (id === "blackhole") {
    return (
      <div className="mini-sim blackhole-sim" aria-hidden="true">
        <div className="horizon" />
        <div className="accretion" />
      </div>
    );
  }

  return (
    <div className="mini-sim galaxy-sim" aria-hidden="true">
      <div className="bar one" />
      <div className="bar two" />
      <div className="bar three" />
      <div className="curve" />
    </div>
  );
}

export default function UniverseSimulatorCards() {
  const [activeId, setActiveId] = useState(simulatorCards[0].id);
  const active = simulatorCards.find((card) => card.id === activeId) || simulatorCards[0];

  return (
    <div className="simulator-layout">
      <div className="sim-card-grid">
        {simulatorCards.map((card) => {
          const Icon = icons[card.id] || Atom;

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
            </button>
          );
        })}
      </div>

      <article className="glass-card simulator-stage" aria-live="polite">
        <MiniSimulation id={active.id} />
        <div className="sim-copy">
          <p className="eyebrow">Interactive concept card</p>
          <h3>{active.title}</h3>
          <h4>{active.subtitle}</h4>
          <p>{active.body}</p>
          <div className="sim-metric">
            <span>{active.metric}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </div>
        </div>
      </article>
    </div>
  );
}
