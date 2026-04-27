import {
  Atom,
  BrainCircuit,
  ChevronRight,
  Compass,
  Orbit,
  ShieldCheck,
  Sparkles,
  Stars,
} from "lucide-react";

import CosmicQuestionEngine from "./components/CosmicQuestionEngine.jsx";
import PhiPatternLab from "./components/PhiPatternLab.jsx";
import UniverseSimulatorCards from "./components/UniverseSimulatorCards.jsx";
import CreatorManifesto from "./components/CreatorManifesto.jsx";
import EvidenceLadder from "./components/EvidenceLadder.jsx";

const navItems = [
  { href: "#question-engine", label: "Question Engine" },
  { href: "#phi-lab", label: "Phi Lab" },
  { href: "#simulators", label: "Simulators" },
  { href: "#manifesto", label: "Manifesto" },
];

export default function App() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#question-engine">
        Skip to explorer
      </a>
      <div className="star-field" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Astra-Phi home">
          <span className="brand-mark" aria-hidden="true">
            <Atom size={22} />
          </span>
          <span>Astra-Phi</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Local AI-style cosmic pattern explorer
          </p>

          <h1>
            Where cosmic wonder meets
            <span> scientific evidence.</span>
          </h1>

          <p className="hero-lede">
            Astra-Phi helps students explore astronomy, physics, entropy,
            gravity, spiral structure, and mathematical beauty while keeping
            every claim tied to evidence.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#question-engine">
              Launch the explorer <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a className="ghost-button" href="#manifesto">
              Read the mission
            </a>
          </div>

          <div className="hero-stats" aria-label="Project highlights">
            <article>
              <strong>4</strong>
              <span>learning layers</span>
            </article>
            <article>
              <strong>5</strong>
              <span>physics concepts</span>
            </article>
            <article>
              <strong>Local</strong>
              <span>no API key needed</span>
            </article>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-system" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="planet planet-one" />
            <div className="planet planet-two" />
            <div className="planet planet-three" />
            <div className="core">
              <Stars size={42} />
              <span>Phi</span>
            </div>
          </div>
          <div className="glass-card hero-note">
            <BrainCircuit size={20} aria-hidden="true" />
            <p>
              Ask a question, choose your level, and get an explanation,
              analogy, and misconception check from a local response engine.
            </p>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Astra-Phi strengths">
        <article>
          <Compass size={22} aria-hidden="true" />
          <h2>Guided curiosity</h2>
          <p>Turns space questions into clear learning paths.</p>
        </article>
        <article>
          <Orbit size={22} aria-hidden="true" />
          <h2>Visual physics</h2>
          <p>Gives abstract ideas shape, motion, and context.</p>
        </article>
        <article>
          <ShieldCheck size={22} aria-hidden="true" />
          <h2>Evidence discipline</h2>
          <p>Separates beautiful patterns from supported claims.</p>
        </article>
      </section>

      <section id="question-engine" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Module 01</p>
          <h2>Cosmic Question Engine</h2>
          <p>
            A local AI-style tutor that maps astronomy and physics questions
            into layered explanations, analogies, and misconception checks.
          </p>
        </div>
        <CosmicQuestionEngine />
      </section>

      <section id="phi-lab" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Module 02</p>
          <h2>Phi Pattern Lab</h2>
          <p>
            Explore the beauty of Phi while separating real scientific evidence
            from coincidence, approximation, and aesthetics.
          </p>
        </div>
        <PhiPatternLab />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Module 03</p>
          <h2>Evidence Ladder</h2>
          <p>
            Astra-Phi labels claims by evidence strength so wonder stays
            powerful instead of becoming misinformation.
          </p>
        </div>
        <EvidenceLadder />
      </section>

      <section id="simulators" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Module 04</p>
          <h2>Universe Simulator Cards</h2>
          <p>
            Compact visual demos for the concepts students usually hear about
            before they truly understand them.
          </p>
        </div>
        <UniverseSimulatorCards />
      </section>

      <section id="manifesto" className="content-section">
        <CreatorManifesto />
      </section>

      <footer className="footer">
        <p>
          Built for the AI Showcase. Astra-Phi principle: wonder is strongest
          when it stays connected to evidence.
        </p>
      </footer>
    </main>
  );
}
