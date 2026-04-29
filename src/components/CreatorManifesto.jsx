import { Landmark, Orbit, ShieldCheck } from "lucide-react";

export default function CreatorManifesto() {
  return (
    <article className="manifesto glass-card">
      <div className="manifesto-icon" aria-hidden="true">
        <Landmark size={34} />
      </div>

      <div>
        <p className="eyebrow">Curator's closing note</p>
        <h2>Wonder is not weakened by evidence. It is sharpened by it.</h2>

        <p>
          Astra-Phi was built so space can feel reachable without being
          simplified into myths. The museum begins with curiosity, then places
          each claim beside evidence.
        </p>

        <p>
          Phi, spirals, gravity, entropy, and galaxy motion are all richer when
          they are handled with care. A beautiful pattern can open the door, but
          measurement decides how far the claim can travel.
        </p>

        <div className="manifesto-principles">
          <div>
            <Orbit size={20} aria-hidden="true" />
            <span>Wonder opens the gallery.</span>
          </div>
          <div>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>Evidence earns the label.</span>
          </div>
        </div>
      </div>
    </article>
  );
}
