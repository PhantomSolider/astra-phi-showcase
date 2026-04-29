import { Compass, Ruler, ShieldCheck, Telescope } from "lucide-react";
import { useMemo, useState } from "react";
import { patternReviewSteps } from "../data/concepts.js";

const reviewIcons = {
  observe: Telescope,
  measure: Ruler,
  model: Compass,
  label: ShieldCheck,
};

export default function PatternClaimReview() {
  const [selectedId, setSelectedId] = useState(patternReviewSteps[0].id);
  const selected = useMemo(
    () => patternReviewSteps.find((step) => step.id === selectedId) || patternReviewSteps[0],
    [selectedId]
  );
  const SelectedIcon = reviewIcons[selected.id] || Telescope;

  return (
    <div className="review-shell">
      <div className="glass-card review-stage">
        <div className="review-constellation" aria-hidden="true">
          <span className="node node-one" />
          <span className="node node-two" />
          <span className="node node-three" />
          <span className="node node-four" />
          <span className="line line-one" />
          <span className="line line-two" />
          <span className="line line-three" />
        </div>

        <div className="review-copy">
          <p className="eyebrow">Claim review station</p>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <div className="review-check">
            <SelectedIcon size={20} aria-hidden="true" />
            <span>{selected.check}</span>
          </div>
        </div>
      </div>

      <div className="review-steps" aria-label="Pattern claim review steps">
        {patternReviewSteps.map((step) => {
          const StepIcon = reviewIcons[step.id] || Telescope;

          return (
            <button
              key={step.id}
              type="button"
              className={step.id === selectedId ? "active" : ""}
              aria-pressed={step.id === selectedId}
              onClick={() => setSelectedId(step.id)}
            >
              <StepIcon size={19} aria-hidden="true" />
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>

      <div className="review-route">
        <a href="#phi-lab">Try it in the Phi gallery</a>
        <a href="#evidence">Read the evidence wall</a>
      </div>
    </div>
  );
}
