import {
  CircleDot,
  Compass,
  Orbit,
  ShieldCheck,
  Telescope,
  Waves,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  buildKnowledgeConsoleEntry,
  knowledgeEntries,
  learningLevels,
} from "../lib/knowledgeEngine.js";

const entryIcons = {
  galaxies: Orbit,
  entropy: Waves,
  gravity: Orbit,
  blackholes: CircleDot,
  phi: Compass,
};

export default function KnowledgeConsole() {
  const [selectedId, setSelectedId] = useState(knowledgeEntries[0].id);
  const [level, setLevel] = useState("college");

  const response = useMemo(
    () => buildKnowledgeConsoleEntry(selectedId, level),
    [selectedId, level]
  );

  return (
    <div className="engine-grid">
      <div className="glass-card engine-panel">
        <div className="panel-title">
          <Telescope size={22} aria-hidden="true" />
          <div>
            <h3>Knowledge console</h3>
            <p>
              Choose a prepared exhibit path. Each entry is complete, curated,
              and paired with a caution note.
            </p>
          </div>
        </div>

        <div className="input-label" id="knowledge-path-label">
          Curated knowledge paths
        </div>
        <div
          className="console-entry-list"
          role="group"
          aria-labelledby="knowledge-path-label"
        >
          {knowledgeEntries.map((entry) => {
            const EntryIcon = entryIcons[entry.id] || Orbit;

            return (
              <button
                key={entry.id}
                type="button"
                className={entry.id === selectedId ? "active" : ""}
                aria-pressed={entry.id === selectedId}
                onClick={() => setSelectedId(entry.id)}
              >
                <EntryIcon size={20} aria-hidden="true" />
                <span>{entry.label}</span>
                <small>{entry.subtitle}</small>
                {entry.id === selectedId && <em>On display</em>}
              </button>
            );
          })}
        </div>

        <div className="input-label" id="learning-level-label">
          Learning level
        </div>
        <div
          className="level-switcher"
          role="group"
          aria-labelledby="learning-level-label"
        >
          {learningLevels.map((item) => (
            <button
              key={item.value}
              type="button"
              className={level === item.value ? "active" : ""}
              aria-pressed={level === item.value}
              onClick={() => setLevel(item.value)}
            >
              <span>{item.shortLabel}</span>
              <small>{item.focus}</small>
            </button>
          ))}
        </div>
      </div>

      <article className="glass-card response-card" aria-live="polite">
        <div className="response-kicker">
          <Orbit size={18} aria-hidden="true" />
          <span>{response.levelLabel} placard</span>
        </div>

        <h3>{response.title}</h3>

        <div className="response-meta" aria-label="Response context">
          <div>
            <span>Selected exhibit</span>
            <strong>{response.entryLabel}</strong>
          </div>
          <div>
            <span>Learning lens</span>
            <strong>{response.levelFocus}</strong>
          </div>
          <div>
            <span>Station</span>
            <strong>Curated console</strong>
          </div>
        </div>

        <div className="response-block">
          <h4>Gallery placard</h4>
          <p>{response.simple}</p>
        </div>

        <div className="response-block">
          <h4>{response.depthLabel}</h4>
          <p>{response.deeper}</p>
        </div>

        <div className="response-block lens">
          <h4>Why this level feels different</h4>
          <p>{response.levelLens}</p>
        </div>

        <div className="response-block analogy">
          <Compass size={18} aria-hidden="true" />
          <div>
            <h4>Exhibit analogy</h4>
            <p>{response.analogy}</p>
          </div>
        </div>

        <div className="response-block warning">
          <ShieldCheck size={18} aria-hidden="true" />
          <div>
            <h4>Evidence caution</h4>
            <p>{response.misconception}</p>
          </div>
        </div>

        <div className="engine-note">
          <span>{response.engineNote}</span>
        </div>

        <div className="next-route">
          <span>Continue the route:</span>
          <button type="button" onClick={() => setSelectedId(response.nextEntryId)}>
            {response.nextEntryLabel}
          </button>
          <a href={response.exhibitHref}>{response.exhibitLabel}</a>
        </div>
      </article>
    </div>
  );
}
