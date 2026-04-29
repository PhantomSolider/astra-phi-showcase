import { Activity, BadgeCheck, Eye, Microscope } from "lucide-react";
import { useMemo, useState } from "react";
import { phiExamples } from "../data/concepts.js";

function GoldenSpiralGraphic({ score, label }) {
  const opacity = Math.max(0.25, score / 100);

  return (
    <div className="spiral-stage">
      <svg
        className="phi-visual"
        viewBox="0 0 520 360"
        role="img"
        aria-labelledby="spiral-title spiral-desc"
      >
        <title id="spiral-title">Visual spiral comparison for {label}</title>
        <desc id="spiral-desc">
          A symbolic galaxy-like spiral with a Phi overlay. The score is a
          visual teaching signal, not proof of a scientific claim.
        </desc>
        <defs>
          <radialGradient id="nebula" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(173, 127, 255, 0.95)" />
            <stop offset="55%" stopColor="rgba(84, 214, 255, 0.28)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="520" height="360" rx="28" fill="rgba(255,255,255,0.03)" />

        <g className="measurement-grid">
          <ellipse cx="260" cy="180" rx="210" ry="126" />
          <ellipse cx="260" cy="180" rx="150" ry="90" />
          <line x1="76" y1="180" x2="444" y2="180" />
          <line x1="260" y1="62" x2="260" y2="298" />
        </g>

        <g className="galaxy-particle-cloud">
          {Array.from({ length: 150 }).map((_, index) => {
            const angle = index * 0.42;
            const radius = 4 + index * 1.46;
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
        </g>

        <ellipse className="galaxy-glow" cx="260" cy="180" rx="185" ry="112" fill="url(#nebula)" opacity="0.75" />
        <path
          className="phi-curve"
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
          className="phi-guide"
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
        <circle className="galaxy-core-dot" cx="260" cy="180" r="12" fill="rgba(255,255,255,0.92)" />
        <text x="28" y="44" fill="rgba(255,255,255,0.84)" fontSize="18" fontWeight="700">
          Curated visual match: {score}%
        </text>
        <text x="28" y="322" fill="rgba(255,255,255,0.62)" fontSize="14" fontWeight="700">
          Symbolic overlay; measure before claiming Phi
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
            <h3>Pattern gallery</h3>
            <p>Move between exhibits. Beauty starts the investigation; measurement earns the claim.</p>
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
              {example.id === selectedId && <em>Selected exhibit</em>}
            </button>
          ))}
        </div>
      </div>

      <article className="glass-card phi-main" aria-live="polite">
        <GoldenSpiralGraphic score={selected.score} label={selected.label} />

        <div className="claim-card">
          <div className="claim-header">
            <div>
              <p className="eyebrow">Pattern claim</p>
              <h3>{selected.label}</h3>
            </div>
            <span className="evidence-pill">{selected.evidence}</span>
          </div>

          <p className="claim-text">{selected.claim}</p>

          <div className="score-grid" aria-label="Curated pattern scores">
            <div className="score-meter">
              <div>
                <span>Looks like Phi</span>
                <strong>{selected.score}%</strong>
              </div>
              <meter min="0" max="100" value={selected.score}>
                {selected.score}%
              </meter>
            </div>
            <div className="score-meter evidence">
              <div>
                <span>Evidence strength</span>
                <strong>{selected.evidenceScore}%</strong>
              </div>
              <meter min="0" max="100" value={selected.evidenceScore}>
                {selected.evidenceScore}%
              </meter>
            </div>
          </div>

          <div className="science-check">
            <div>
              <BadgeCheck size={20} aria-hidden="true" />
              <strong>Evidence check</strong>
            </div>
            <p>{selected.verdict}</p>
          </div>

          <div className="curator-note">
            <strong>Curator note</strong>
            <p>{selected.exhibitNote}</p>
          </div>

          <div className="metric-row">
            <div>
              <Eye size={18} aria-hidden="true" />
              <span>Symbolic overlay</span>
            </div>
            <div>
              <Activity size={18} aria-hidden="true" />
              <span>Measured support</span>
            </div>
          </div>

          <a className="inline-link" href="#pattern-review">
            Review this kind of claim
          </a>
        </div>
      </article>
    </div>
  );
}
