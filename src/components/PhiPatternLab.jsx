import { Activity, BadgeCheck, Eye, Microscope } from "lucide-react";
import { useMemo, useState } from "react";
import { phiExamples } from "../data/concepts.js";

const shellRidgePath = `M260 180
  C270 155, 310 150, 322 180
  C340 226, 274 257, 223 226
  C146 180, 189 80, 302 74
  C465 66, 526 244, 390 322`;

function GalaxyVisual() {
  return (
    <>
      <g className="galaxy-density-waves">
        <ellipse cx="260" cy="180" rx="164" ry="94" />
        <ellipse cx="260" cy="180" rx="116" ry="66" />
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
              className="galaxy-star-particle"
              cx={x}
              cy={y}
              r={index % 9 === 0 ? 2.8 : 1.4}
              fill="rgba(255,255,255,0.72)"
              style={{ "--particle-delay": `${-(index % 30) * 0.14}s` }}
            />
          );
        })}
      </g>
      <ellipse className="galaxy-glow" cx="260" cy="180" rx="185" ry="112" fill="url(#galaxyNebula)" opacity="0.78" />
      <circle className="galaxy-core-dot" cx="260" cy="180" r="12" fill="rgba(255,255,255,0.92)" />
    </>
  );
}

function SunflowerVisual() {
  return (
    <g className="sunflower-system">
      <circle cx="260" cy="180" r="128" fill="url(#sunflowerDisk)" opacity="0.96" />
      <g className="seed-field">
        {Array.from({ length: 190 }).map((_, index) => {
          const angle = index * 2.3999632297;
          const radius = 4.6 * Math.sqrt(index);
          const x = 260 + Math.cos(angle) * radius;
          const y = 180 + Math.sin(angle) * radius;
          const seedSize = 2.1 + (index % 5) * 0.18;
          return (
            <ellipse
              key={index}
              className="seed-dot"
              cx={x}
              cy={y}
              rx={seedSize}
              ry={seedSize * 1.45}
              fill={index % 3 === 0 ? "rgba(255,208,113,0.88)" : "rgba(255,122,47,0.74)"}
              transform={`rotate(${(angle * 180) / Math.PI} ${x} ${y})`}
              style={{ "--seed-delay": `${-(index % 18) * 0.08}s` }}
            />
          );
        })}
      </g>
      <circle cx="260" cy="180" r="24" fill="rgba(45, 12, 10, .92)" stroke="rgba(255,208,113,.5)" />
    </g>
  );
}

function HurricaneVisual() {
  const bands = [
    "M268 180 C300 128, 398 134, 418 198 C438 260, 360 310, 286 282",
    "M260 180 C220 130, 126 148, 104 212 C82 278, 166 322, 246 290",
    "M270 180 C306 164, 350 188, 350 230 C350 270, 304 292, 268 270",
    "M250 178 C212 198, 196 238, 226 268 C252 294, 304 288, 326 252",
  ];

  return (
    <g className="storm-system">
      <ellipse cx="260" cy="180" rx="178" ry="118" fill="url(#stormField)" opacity="0.9" />
      <g className="storm-bands">
        {bands.map((band, index) => (
          <path
            key={band}
            d={band}
            fill="none"
            stroke={index % 2 === 0 ? "rgba(255,255,255,.74)" : "rgba(255,122,184,.58)"}
            strokeWidth={index < 2 ? 16 : 10}
            strokeLinecap="round"
            opacity="0.78"
          />
        ))}
      </g>
      <circle className="storm-eye" cx="260" cy="180" r="22" fill="rgba(5,7,12,.95)" stroke="rgba(255,255,255,.8)" strokeWidth="3" />
      <g className="rain-vectors">
        {Array.from({ length: 28 }).map((_, index) => {
          const x = 92 + (index % 7) * 58;
          const y = 74 + Math.floor(index / 7) * 58;
          return (
            <line
              key={index}
              x1={x}
              y1={y}
              x2={x + 22}
              y2={y + 10}
              style={{
                "--rain-delay": `${-(index % 14) * 0.12}s`,
                "--rain-x": `${14 + (index % 5) * 4}px`,
                "--rain-y": `${7 + (index % 4) * 3}px`,
              }}
            />
          );
        })}
      </g>
    </g>
  );
}

function ShellVisual() {
  return (
    <g className="shell-system">
      <ellipse cx="282" cy="188" rx="176" ry="118" fill="url(#shellField)" opacity="0.94" />
      <g className="shell-chambers">
        {Array.from({ length: 18 }).map((_, index) => {
          const angle = index * 0.48;
          const radius = 8 + index * 8.7;
          const x = 252 + Math.cos(angle) * radius;
          const y = 188 + Math.sin(angle) * radius * 0.68;
          const size = 15 + index * 2.8;
          return (
            <ellipse
              key={index}
              cx={x}
              cy={y}
              rx={size}
              ry={size * 0.56}
              fill={index % 2 === 0 ? "rgba(255,208,113,.34)" : "rgba(255,122,47,.24)"}
              stroke="rgba(255,248,247,.34)"
              transform={`rotate(${angle * 58} ${x} ${y})`}
            />
          );
        })}
      </g>
      <path className="shell-ridge" d={shellRidgePath} fill="none" stroke="rgba(255,248,247,.62)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="252" cy="188" r="10" fill="rgba(255,248,247,.85)" />
    </g>
  );
}

function PatternVisual({ id }) {
  if (id === "sunflower") return <SunflowerVisual />;
  if (id === "hurricane") return <HurricaneVisual />;
  if (id === "shell") return <ShellVisual />;
  return <GalaxyVisual />;
}

function PatternVisualStage({ example }) {
  const { id, score, label } = example;

  return (
    <div className={`spiral-stage pattern-visual visual-${id}`}>
      <svg
        className="phi-visual"
        viewBox="0 0 520 360"
        role="img"
        aria-labelledby="spiral-title spiral-desc"
      >
        <title id="spiral-title">Visual spiral comparison for {label}</title>
        <desc id="spiral-desc">
          A symbolic visual study tailored to this exhibit. The animation is a
          teaching cue, not proof of a golden-ratio structure.
        </desc>
        <defs>
          <radialGradient id="galaxyNebula" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(173, 127, 255, 0.95)" />
            <stop offset="55%" stopColor="rgba(255, 61, 78, 0.28)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
          </radialGradient>
          <radialGradient id="sunflowerDisk" cx="50%" cy="50%" r="64%">
            <stop offset="0%" stopColor="rgba(70, 28, 8, .96)" />
            <stop offset="60%" stopColor="rgba(255, 122, 47, .34)" />
            <stop offset="100%" stopColor="rgba(255, 208, 113, .08)" />
          </radialGradient>
          <radialGradient id="stormField" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="rgba(255,255,255,.42)" />
            <stop offset="48%" stopColor="rgba(255,61,78,.24)" />
            <stop offset="100%" stopColor="rgba(20,8,14,.06)" />
          </radialGradient>
          <radialGradient id="shellField" cx="48%" cy="52%" r="68%">
            <stop offset="0%" stopColor="rgba(255, 208, 113, .45)" />
            <stop offset="56%" stopColor="rgba(255, 122, 47, .2)" />
            <stop offset="100%" stopColor="rgba(255, 61, 78, .05)" />
          </radialGradient>
        </defs>

        <PatternVisual id={id} />
        <text x="28" y="44" fill="rgba(255,255,255,0.84)" fontSize="18" fontWeight="700">
          Curated visual match: {score}%
        </text>
        <text x="28" y="322" fill="rgba(255,255,255,0.62)" fontSize="14" fontWeight="700">
          Concept animation; measure before claiming Phi
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
        <PatternVisualStage example={selected} />

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
              <span>Concept animation</span>
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
