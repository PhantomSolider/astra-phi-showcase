import { Activity, BadgeCheck, Eye, Microscope } from "lucide-react";
import { useMemo, useState } from "react";
import { phiExamples } from "../data/concepts.js";

function GoldenSpiralGraphic({ score }) {
  const opacity = Math.max(0.25, score / 100);

  return (
    <div className="spiral-stage">
      <svg viewBox="0 0 520 360" role="img" aria-labelledby="spiral-title spiral-desc">
        <title id="spiral-title">Visual spiral comparison</title>
        <desc id="spiral-desc">
          A stylized galaxy-like spiral with a Phi overlay. The score is a
          visual match score, not proof of a scientific claim.
        </desc>
        <defs>
          <radialGradient id="nebula" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(173, 127, 255, 0.95)" />
            <stop offset="55%" stopColor="rgba(84, 214, 255, 0.28)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="520" height="360" rx="28" fill="rgba(255,255,255,0.03)" />

        {Array.from({ length: 140 }).map((_, index) => {
          const angle = index * 0.42;
          const radius = 4 + index * 1.48;
          const x = 260 + Math.cos(angle) * radius;
          const y = 180 + Math.sin(angle) * radius * 0.64;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={index % 9 === 0 ? 2.8 : 1.4}
              fill="rgba(255,255,255,0.72)"
            />
          );
        })}

        <ellipse cx="260" cy="180" rx="185" ry="112" fill="url(#nebula)" opacity="0.75" />
        <path
          d="M260 180
             C270 155, 310 150, 322 180
             C340 226, 274 257, 223 226
             C146 180, 189 80, 302 74
             C465 66, 526 244, 390 322"
          fill="none"
          stroke={`rgba(255, 222, 133, ${opacity})`}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M260 180
             C270 155, 310 150, 322 180
             C340 226, 274 257, 223 226
             C146 180, 189 80, 302 74
             C465 66, 526 244, 390 322"
          fill="none"
          stroke="rgba(255,255,255,0.56)"
          strokeWidth="1.4"
          strokeDasharray="8 10"
        />
        <circle cx="260" cy="180" r="12" fill="rgba(255,255,255,0.92)" />
        <text x="28" y="44" fill="rgba(255,255,255,0.84)" fontSize="18" fontWeight="700">
          Visual match score: {score}%
        </text>
      </svg>
    </div>
  );
}

export default function PhiPatternLab() {
  const [selectedId, setSelectedId] = useState(phiExamples[0].id);

  const selected = useMemo(
    () => phiExamples.find((item) => item.id === selectedId) || phiExamples[0],
    [selectedId]
  );

  return (
    <div className="phi-grid">
      <div className="glass-card phi-sidebar">
        <div className="panel-title">
          <Microscope size={22} aria-hidden="true" />
          <div>
            <h3>Select a pattern claim</h3>
            <p>Judge the claim by evidence, not just beauty.</p>
          </div>
        </div>

        <div className="pattern-list" aria-label="Pattern claims">
          {phiExamples.map((example) => (
            <button
              key={example.id}
              type="button"
              className={example.id === selectedId ? "active" : ""}
              aria-pressed={example.id === selectedId}
              onClick={() => setSelectedId(example.id)}
            >
              <span>{example.label}</span>
              <small>{example.kind}</small>
            </button>
          ))}
        </div>
      </div>

      <article className="glass-card phi-main" aria-live="polite">
        <GoldenSpiralGraphic score={selected.score} />

        <div className="claim-card">
          <div className="claim-header">
            <div>
              <p className="eyebrow">Pattern claim</p>
              <h3>{selected.label}</h3>
            </div>
            <span className="evidence-pill">{selected.evidence}</span>
          </div>

          <p className="claim-text">{selected.claim}</p>

          <div className="science-check">
            <div>
              <BadgeCheck size={20} aria-hidden="true" />
              <strong>Science check</strong>
            </div>
            <p>{selected.verdict}</p>
          </div>

          <div className="metric-row">
            <div>
              <Eye size={18} aria-hidden="true" />
              <span>Visual pull</span>
            </div>
            <div>
              <Activity size={18} aria-hidden="true" />
              <span>Evidence strength</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
