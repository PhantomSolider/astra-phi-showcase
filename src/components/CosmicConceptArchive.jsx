import { Orbit, Telescope } from "lucide-react";
import { useMemo, useState } from "react";
import { conceptArchive } from "../data/concepts.js";

export default function CosmicConceptArchive() {
  const [selectedId, setSelectedId] = useState(conceptArchive[0].id);
  const selected = useMemo(
    () => conceptArchive.find((concept) => concept.id === selectedId) || conceptArchive[0],
    [selectedId]
  );

  return (
    <div className="archive-shell">
      <div className="glass-card archive-list">
        <div className="panel-title">
          <Telescope size={22} aria-hidden="true" />
          <div>
            <h3>Choose an archive drawer</h3>
            <p>
              Each drawer gives one complete idea, one caution, and one place
              to continue the museum path.
            </p>
          </div>
        </div>

        <div className="archive-tabs" aria-label="Cosmic concept archive drawers">
          {conceptArchive.map((concept) => (
            <button
              key={concept.id}
              type="button"
              className={concept.id === selectedId ? "active" : ""}
              aria-pressed={concept.id === selectedId}
              onClick={() => setSelectedId(concept.id)}
            >
              <span>{concept.label}</span>
              <small>{concept.family}</small>
            </button>
          ))}
        </div>
      </div>

      <article
        className={`glass-card archive-detail archive-${selected.color}`}
        aria-live="polite"
      >
        <div className="archive-visual" aria-hidden="true">
          <div className="archive-orbit orbit-a" />
          <div className="archive-orbit orbit-b" />
          <div className="archive-core">
            <Orbit size={42} />
          </div>
          <span className="archive-particle particle-a" />
          <span className="archive-particle particle-b" />
          <span className="archive-particle particle-c" />
        </div>

        <div className="archive-copy">
          <p className="eyebrow">{selected.family}</p>
          <h3>{selected.label}</h3>
          <h4>{selected.subtitle}</h4>
          <p>{selected.summary}</p>

          <div className="archive-takeaway">
            <strong>Takeaway</strong>
            <p>{selected.takeaway}</p>
          </div>

          <a className="inline-link" href={selected.anchor}>
            {selected.action}
          </a>
        </div>
      </article>
    </div>
  );
}
