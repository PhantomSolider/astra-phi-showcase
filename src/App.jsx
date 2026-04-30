import {
  BookOpen,
  ChevronRight,
  Compass,
  Landmark,
  Map,
  Orbit,
  ShieldCheck,
  Telescope,
} from "lucide-react";
import { useEffect } from "react";

import KnowledgeConsole from "./components/KnowledgeConsole.jsx";
import PhiPatternLab from "./components/PhiPatternLab.jsx";
import UniverseSimulatorCards from "./components/UniverseSimulatorCards.jsx";
import CreatorManifesto from "./components/CreatorManifesto.jsx";
import EvidenceLadder from "./components/EvidenceLadder.jsx";
import CosmicConceptArchive from "./components/CosmicConceptArchive.jsx";
import PatternClaimReview from "./components/PatternClaimReview.jsx";
import ObservatoryDeck from "./components/ObservatoryDeck.jsx";
import CosmicCursor from "./components/CosmicCursor.jsx";

const navItems = [
  { href: "#explore", label: "Map" },
  { href: "#knowledge-console", label: "Console" },
  { href: "#phi-lab", label: "Phi" },
  { href: "#evidence", label: "Evidence" },
  { href: "#simulators", label: "Hall" },
  { href: "#archive", label: "Archive" },
  { href: "#deck", label: "Deck" },
];

const exploreSteps = [
  {
    title: "Begin with a curated path",
    text: "Use the knowledge console to open a prepared route through cosmic ideas.",
  },
  {
    title: "Compare beauty with proof",
    text: "Move through the Phi gallery and see where visual patterns need measurement.",
  },
  {
    title: "Read the evidence level",
    text: "Use the evidence wall to separate measured ideas from visual guesses.",
  },
  {
    title: "Watch the concepts move",
    text: "Open the demonstration hall for symbolic views of gravity, entropy, orbits, and galaxies.",
  },
  {
    title: "Leave with a method",
    text: "Use the archive and observatory deck to carry the evidence-first habit forward.",
  },
];

function usePerformanceManagement() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const body = document.body;
    const sections = Array.from(
      document.querySelectorAll(".hero, .value-strip, .content-section, .footer")
    );

    body.classList.add("performance-managed");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-in-view"));

      return () => {
        body.classList.remove("performance-managed");
        sections.forEach((section) => section.classList.remove("is-in-view"));
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
      },
      { rootMargin: "850px 0px 850px 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      body.classList.remove("performance-managed");
      sections.forEach((section) => section.classList.remove("is-in-view"));
    };
  }, []);
}

export default function App() {
  usePerformanceManagement();

  return (
    <main className="site-shell">
      <a className="skip-link" href="#knowledge-console">
        Skip to knowledge console
      </a>
      <CosmicCursor />
      <div className="cosmic-backdrop" aria-hidden="true">
        <div className="star-layer star-layer-far" />
        <div className="star-layer star-layer-near" />
        <div className="nebula-ribbon nebula-ribbon-one" />
        <div className="nebula-ribbon nebula-ribbon-two" />
        <div className="aurora-veil aurora-veil-one" />
        <div className="aurora-veil aurora-veil-two" />
        <div className="cosmic-grid" />
        <div className="light-waves">
          <span />
          <span />
          <span />
        </div>
        <div className="equation-field">
          <span>S = k ln Omega</span>
          <span>r = a phi^(2 theta/pi)</span>
          <span>v^2 = GM/r</span>
          <span>lambda = c/f</span>
        </div>
        <div className="relativity-lens">
          <span />
          <span />
        </div>
        <div className="cosmic-dust">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="shooting-stars">
          <span />
          <span />
          <span />
        </div>
      </div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Astra-Phi home">
          <span className="brand-mark" aria-hidden="true">
            <Orbit size={22} />
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
            <Telescope size={16} aria-hidden="true" />
            Interstellar knowledge museum
          </p>

          <h1>
            Step inside a living museum
            <span> of cosmic evidence.</span>
          </h1>

          <p className="hero-lede">
            Astra-Phi is an interactive observatory for astronomy, physics,
            pattern analysis, and evidence. Wander through curated exhibits,
            Phi exhibits, evidence markers, and symbolic demonstrations that
            make space science feel close without overstating what we know.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#knowledge-console">
              Enter the museum <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a className="ghost-button" href="#manifesto">
              Read the curator note
            </a>
          </div>

          <div className="hero-stats" aria-label="Project highlights">
            <article>
              <strong>7</strong>
              <span>museum galleries</span>
            </article>
            <article>
              <strong>6</strong>
              <span>archive drawers</span>
            </article>
          </div>
        </div>

        <div className="hero-visual">
          <div className="observatory-window">
            <div className="orbit-system" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="measurement-ring measurement-ring-one" />
              <div className="measurement-ring measurement-ring-two" />
              <div className="geodesic geodesic-one" />
              <div className="geodesic geodesic-two" />
              <div className="instrument-sweep" />
              <div className="planet planet-one" />
              <div className="planet planet-two" />
              <div className="planet planet-three" />
              <div className="core">
                <Orbit size={42} />
                <span>Phi</span>
              </div>
            </div>
            <div className="window-caption">
              <strong>Patterns become knowledge when measured.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Astra-Phi strengths">
        <article>
          <Compass size={22} aria-hidden="true" />
          <h2>Curated paths</h2>
          <p>Start with a prepared exhibit and follow a clear route through it.</p>
        </article>
        <article>
          <Orbit size={22} aria-hidden="true" />
          <h2>Living exhibits</h2>
          <p>Symbolic motion gives abstract physics shape, rhythm, and context.</p>
        </article>
        <article>
          <ShieldCheck size={22} aria-hidden="true" />
          <h2>Evidence checks</h2>
          <p>Every beautiful claim has to pass through scientific caution.</p>
        </article>
      </section>

      <section id="explore" className="content-section explore-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Map size={16} aria-hidden="true" />
            Visitor path
          </p>
          <h2>How to explore Astra-Phi</h2>
          <p>
            Move through the page like a compact science museum: select,
            compare, check the evidence, then watch a concept come alive.
          </p>
        </div>
        <div className="explore-grid" aria-label="How to explore Astra-Phi">
          {exploreSteps.map((step, index) => (
            <article className="museum-card" key={step.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="knowledge-console" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Telescope size={16} aria-hidden="true" />
            Gallery 01
          </p>
          <h2>Knowledge Console</h2>
          <p>
            A curated console for astronomy and physics exhibits. Choose a
            prepared path, set a learning depth, and compare intuition with
            evidence.
          </p>
        </div>
        <KnowledgeConsole />
      </section>

      <section id="phi-lab" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Landmark size={16} aria-hidden="true" />
            Gallery 02
          </p>
          <h2>Phi Pattern Gallery</h2>
          <p>
            A beauty-versus-evidence exhibit for spirals, natural growth, and
            the golden ratio. The point is not to dismiss beauty; it is to test
            what the evidence can support.
          </p>
        </div>
        <PhiPatternLab />
      </section>

      <section id="evidence" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            Gallery 03
          </p>
          <h2>Evidence Wall</h2>
          <p>
            A clear display of scientific confidence levels, from measured
            results to speculative ideas. It keeps cosmic wonder from turning
            into overclaiming.
          </p>
        </div>
        <EvidenceLadder />
      </section>

      <section id="simulators" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <BookOpen size={16} aria-hidden="true" />
            Gallery 04
          </p>
          <h2>Demonstration Hall</h2>
          <p>
            Interactive concept exhibits for entropy, gravity, orbital motion,
            black holes, and galaxy rotation. Each one is symbolic, focused,
            and honest about its limits.
          </p>
        </div>
        <UniverseSimulatorCards />
      </section>

      <section id="archive" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <BookOpen size={16} aria-hidden="true" />
            Gallery 05
          </p>
          <h2>Cosmic Concepts Archive</h2>
          <p>
            A drawer-style archive for the ideas Astra-Phi uses most: entropy,
            gravity, black holes, galaxy structure, Phi, and light. Each entry
            gives a complete takeaway and a path back into the museum.
          </p>
        </div>
        <CosmicConceptArchive />
      </section>

      <section id="pattern-review" className="content-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Compass size={16} aria-hidden="true" />
            Gallery 06
          </p>
          <h2>Pattern Claim Review</h2>
          <p>
            A four-step station for judging cosmic pattern claims. It shows how
            a beautiful observation becomes a careful scientific label.
          </p>
        </div>
        <PatternClaimReview />
      </section>

      <section id="deck" className="content-section gallery-section">
        <ObservatoryDeck />
      </section>

      <section id="manifesto" className="content-section">
        <CreatorManifesto />
      </section>

      <footer className="footer">
        <p>
          Astra-Phi is a museum of cosmic knowledge, visual patterns, and
          evidence-first thinking.
        </p>
      </footer>
    </main>
  );
}
