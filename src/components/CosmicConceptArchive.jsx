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

function EntropyArchiveVisual() {
  return (
    <div className="archive-science archive-entropy" aria-hidden="true">
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
      <span className="galaxy-disk" />
      <span className="galaxy-arm arm-one" />
      <span className="galaxy-arm arm-two" />
      <span className="galaxy-arm arm-three" />
      <span className="galaxy-bulge" />
      {galaxyStars.map(([left, top, opacity, delay], index) => (
        <span
          key={index}
          className="galaxy-field-star"
          style={{ left, top, opacity, animationDelay: delay }}
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
      </defs>
      <rect className="phi-measure-box box-a" x="66" y="62" width="110" height="110" />
      <rect className="phi-measure-box box-b" x="176" y="62" width="68" height="68" />
      <rect className="phi-measure-box box-c" x="176" y="130" width="42" height="42" />
      <path
        className="phi-measure-curve"
        d="M86 172 C102 93 177 75 223 110 C275 150 247 235 163 230 C78 225 50 138 104 88"
      />
      <path className="phi-caliper caliper-a" d="M64 214 H246 M64 205 V223 M246 205 V223" />
      <path className="phi-caliper caliper-b" d="M282 74 V226 M273 74 H291 M273 226 H291" />
      <circle className="phi-measure-point point-a" cx="104" cy="88" r="5" />
      <circle className="phi-measure-point point-b" cx="223" cy="110" r="5" />
      <circle className="phi-measure-point point-c" cx="163" cy="230" r="5" />
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
