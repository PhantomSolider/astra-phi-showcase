import { Telescope } from "lucide-react";
import { useMemo, useState } from "react";
import { conceptArchive } from "../data/concepts.js";

const entropyParticles = [
  ["44%", "46%", "-118px", "-84px", "0s"],
  ["48%", "48%", "-74px", "112px", "-.4s"],
  ["51%", "45%", "126px", "-92px", "-.8s"],
  ["46%", "52%", "92px", "120px", "-1.2s"],
  ["53%", "51%", "-146px", "18px", "-1.6s"],
  ["49%", "43%", "156px", "28px", "-2s"],
  ["42%", "50%", "-42px", "-138px", "-2.4s"],
  ["55%", "47%", "38px", "142px", "-2.8s"],
  ["47%", "55%", "-132px", "82px", "-3.2s"],
  ["52%", "42%", "132px", "-42px", "-3.6s"],
  ["45%", "44%", "-18px", "154px", "-4s"],
  ["54%", "54%", "72px", "-138px", "-4.4s"],
];

const galaxyStars = [
  ["22%", "36%", ".55", "0s"],
  ["31%", "24%", ".38", "-.8s"],
  ["37%", "61%", ".7", "-1.6s"],
  ["49%", "22%", ".52", "-2.4s"],
  ["58%", "70%", ".45", "-3.2s"],
  ["68%", "34%", ".82", "-4s"],
  ["76%", "58%", ".56", "-4.8s"],
  ["43%", "42%", ".66", "-5.6s"],
];

const PHI = (1 + Math.sqrt(5)) / 2;
const goldenSpiralPath = Array.from({ length: 190 }, (_, index) => {
  const theta = (index / 189) * Math.PI * 4;
  const radius = 2.74 * Math.pow(PHI, theta / (Math.PI / 2));
  const angle = theta - 0.72;
  const x = 190 + Math.cos(angle) * radius;
  const y = 176 + Math.sin(angle) * radius;
  return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ");

function EntropyArchiveVisual() {
  return (
    <div className="archive-science archive-entropy" aria-hidden="true">
      <div className="entropy-state-cloud cloud-a" />
      <div className="entropy-state-cloud cloud-b" />
      <span className="entropy-origin" />
      <span className="entropy-probability-ring ring-one" />
      <span className="entropy-probability-ring ring-two" />
      {entropyParticles.map(([left, top, tx, ty, delay], index) => (
        <span
          // The index is stable because this is a fixed scientific motif.
          key={index}
          className="archive-entropy-dot"
          style={{ left, top, "--tx": tx, "--ty": ty, animationDelay: delay }}
        />
      ))}
    </div>
  );
}

function GravityArchiveVisual() {
  return (
    <div className="archive-science archive-gravity" aria-hidden="true">
      <span className="gravity-geodesic geodesic-a" />
      <span className="gravity-geodesic geodesic-b" />
      <span className="gravity-grid grid-one" />
      <span className="gravity-grid grid-two" />
      <span className="gravity-well-ring ring-one" />
      <span className="gravity-well-ring ring-two" />
      <span className="gravity-mass" />
      <span className="gravity-path" />
      <span className="gravity-tracer" />
    </div>
  );
}

function BlackHoleArchiveVisual() {
  return (
    <div className="archive-science archive-blackhole" aria-hidden="true">
      <span className="blackhole-lens lens-one" />
      <span className="blackhole-lens lens-two" />
      <span className="blackhole-disk disk-one" />
      <span className="blackhole-disk disk-two" />
      <span className="blackhole-event-horizon" />
      <span className="blackhole-core-shadow" />
      <span className="blackhole-infall dot-one" />
      <span className="blackhole-infall dot-two" />
      <span className="blackhole-infall dot-three" />
    </div>
  );
}

function GalaxyArchiveVisual() {
  return (
    <div className="archive-science archive-galaxy" aria-hidden="true">
      <span className="galaxy-density-front front-one" />
      <span className="galaxy-density-front front-two" />
      <span className="galaxy-disk" />
      <span className="galaxy-arm arm-one" />
      <span className="galaxy-arm arm-two" />
      <span className="galaxy-arm arm-three" />
      <span className="galaxy-bulge" />
      {galaxyStars.map(([left, top, opacity, delay], index) => (
        <span
          key={index}
          className="galaxy-field-star"
          style={{
            left,
            top,
            opacity,
            animationDelay: delay,
            "--star-dx": `${index % 2 === 0 ? 14 : -18}px`,
            "--star-dy": `${index % 3 === 0 ? -10 : 12}px`,
          }}
        />
      ))}
    </div>
  );
}

function PhiArchiveVisual() {
  return (
    <svg className="archive-science archive-phi" viewBox="0 0 420 320" aria-hidden="true">
      <defs>
        <linearGradient id="archivePhiLine" x1="0" x2="1">
          <stop offset="0" stopColor="#ff3d4e" />
          <stop offset=".55" stopColor="#ffd071" />
          <stop offset="1" stopColor="#ff7a2f" />
        </linearGradient>
        <radialGradient id="archivePhiCore" cx="45%" cy="48%" r="64%">
          <stop offset="0%" stopColor="rgba(255,248,247,.92)" />
          <stop offset="36%" stopColor="rgba(255,211,106,.36)" />
          <stop offset="100%" stopColor="rgba(255,61,78,.02)" />
        </radialGradient>
      </defs>
      <ellipse className="phi-core-field" cx="190" cy="176" rx="142" ry="112" fill="url(#archivePhiCore)" />
      <g className="phi-golden-frame">
        <rect className="phi-measure-box" x="44" y="42" width="144" height="144" />
        <rect className="phi-measure-box" x="188" y="42" width="89" height="89" />
        <rect className="phi-measure-box" x="222" y="131" width="55" height="55" />
        <rect className="phi-measure-box" x="188" y="152" width="34" height="34" />
        <rect className="phi-measure-box" x="188" y="131" width="21" height="21" />
      </g>
      <path className="phi-measure-curve golden-spiral-path" d={goldenSpiralPath} />
      <path className="phi-caliper caliper-a" d="M44 218 H277 M44 208 V228 M277 208 V228" />
      <path className="phi-caliper caliper-b" d="M316 42 V186 M306 42 H326 M306 186 H326" />
      <circle className="phi-measure-point point-a" cx="190" cy="176" r="5" />
      <circle className="phi-measure-point point-b" cx="277" cy="186" r="5" />
      <circle className="phi-measure-point point-c" cx="44" cy="42" r="5" />
    </svg>
  );
}

function LightArchiveVisual() {
  return (
    <svg className="archive-science archive-light" viewBox="0 0 420 320" aria-hidden="true">
      <defs>
        <linearGradient id="archiveLightBeam" x1="0" x2="1">
          <stop offset="0" stopColor="#fff8f7" />
          <stop offset=".42" stopColor="#ff3d4e" />
          <stop offset=".7" stopColor="#ffd071" />
          <stop offset="1" stopColor="#ff7a2f" />
        </linearGradient>
      </defs>
      <path className="light-beam main" d="M32 156 C92 126 138 126 196 156 S302 187 388 142" />
      <path className="light-beam echo echo-one" d="M46 198 C102 165 148 165 206 198 S310 231 380 184" />
      <path className="light-beam echo echo-two" d="M56 114 C116 92 158 92 214 114 S310 139 374 104" />
      <path className="spectrum-stripe stripe-one" d="M242 88 L346 54" />
      <path className="spectrum-stripe stripe-two" d="M248 122 L368 112" />
      <path className="spectrum-stripe stripe-three" d="M248 190 L368 210" />
      <path className="spectrum-prism" d="M218 104 L272 158 L218 212 Z" />
      <circle className="light-source" cx="78" cy="156" r="24" />
      <circle className="light-pulse pulse-one" cx="78" cy="156" r="54" />
      <circle className="light-pulse pulse-two" cx="78" cy="156" r="90" />
    </svg>
  );
}

function ArchiveVisual({ id }) {
  if (id === "gravity") return <GravityArchiveVisual />;
  if (id === "blackholes") return <BlackHoleArchiveVisual />;
  if (id === "galaxies") return <GalaxyArchiveVisual />;
  if (id === "phi") return <PhiArchiveVisual />;
  if (id === "light") return <LightArchiveVisual />;
  return <EntropyArchiveVisual />;
}

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
        className={`glass-card archive-detail archive-${selected.color} archive-topic-${selected.id}`}
        aria-live="polite"
      >
        <div className="archive-visual" aria-hidden="true">
          <ArchiveVisual id={selected.id} />
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
