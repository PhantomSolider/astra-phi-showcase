import { Compass, Orbit, ShieldCheck } from "lucide-react";
import { observatoryTakeaways } from "../data/concepts.js";

const deckIcons = [Orbit, ShieldCheck, Compass];

export default function ObservatoryDeck() {
  return (
    <div className="deck-shell">
      <article className="glass-card deck-card">
        <div className="deck-sky" aria-hidden="true">
          <span className="deck-star star-a" />
          <span className="deck-star star-b" />
          <span className="deck-star star-c" />
          <span className="deck-horizon" />
        </div>
        <div>
          <p className="eyebrow">Observatory deck</p>
          <h2>Leave with a better method.</h2>
          <p>
            Astra-Phi ends where real science begins: with curiosity that knows
            how to look for evidence, measurements, and limits.
          </p>
          <div className="deck-actions">
            <a className="primary-button" href="#knowledge-console">
              Return to the console
            </a>
            <a className="ghost-button" href="#archive">
              Revisit the archive
            </a>
          </div>
        </div>
      </article>

      <div className="deck-takeaways">
        {observatoryTakeaways.map((item, index) => {
          const Icon = deckIcons[index] || Orbit;

          return (
            <article className="glass-card" key={item.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
