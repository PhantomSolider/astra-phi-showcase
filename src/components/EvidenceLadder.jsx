import { CheckCircle2 } from "lucide-react";
import { evidenceLevels } from "../data/concepts.js";

export default function EvidenceLadder() {
  return (
    <div className="ladder" aria-label="Evidence strength levels">
      {evidenceLevels.map((item, index) => (
        <article className="glass-card ladder-step" key={item.level}>
          <div className="ladder-number" aria-hidden="true">{index + 1}</div>
          <div>
            <h3>
              <CheckCircle2 size={18} aria-hidden="true" />
              {item.level}
            </h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
