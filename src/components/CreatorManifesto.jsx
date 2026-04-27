import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function CreatorManifesto() {
  return (
    <article className="manifesto glass-card">
      <div className="manifesto-icon" aria-hidden="true">
        <Rocket size={34} />
      </div>

      <div>
        <p className="eyebrow">Why I built Astra-Phi</p>
        <h2>A bridge between curiosity and real scientific thinking.</h2>

        <p>
          I built Astra-Phi because astrophysics should feel alive, visual, and
          reachable. Space inspires people before equations do, but the next
          step is learning how to connect that wonder to evidence.
        </p>

        <p>
          This project explores mathematical patterns like Phi while staying
          honest about what science can and cannot prove. A beautiful overlay is
          not enough. A strong claim needs measurement, models, and humility.
        </p>

        <div className="manifesto-principles">
          <div>
            <Sparkles size={20} aria-hidden="true" />
            <span>Wonder creates the question.</span>
          </div>
          <div>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>Evidence earns the answer.</span>
          </div>
        </div>
      </div>
    </article>
  );
}
