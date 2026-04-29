import { Compass, Ruler, ShieldCheck, Telescope } from "lucide-react";
import { useMemo, useState } from "react";
import { patternReviewSteps } from "../data/concepts.js";

const reviewIcons = {
  observe: Telescope,
  measure: Ruler,
  model: Compass,
  label: ShieldCheck,
};

function ObserveReviewVisual() {
  return (
    <div className="review-visual review-observe" aria-hidden="true">
      <span className="observe-lens lens-outer" />
      <span className="observe-lens lens-inner" />
      <span className="observe-crosshair cross-x" />
      <span className="observe-crosshair cross-y" />
      <span className="observe-scan" />
      <span className="observe-star star-one" />
      <span className="observe-star star-two" />
      <span className="observe-star star-three" />
      <span className="observe-star star-four" />
    </div>
  );
}

function MeasureReviewVisual() {
  return (
    <svg className="review-visual review-measure" viewBox="0 0 520 360" aria-hidden="true">
      <path className="measure-grid-line vertical one" d="M130 46 V304" />
      <path className="measure-grid-line vertical two" d="M220 46 V304" />
      <path className="measure-grid-line vertical three" d="M310 46 V304" />
      <path className="measure-grid-line horizontal one" d="M74 104 H430" />
      <path className="measure-grid-line horizontal two" d="M74 184 H430" />
      <path className="measure-grid-line horizontal three" d="M74 264 H430" />
      <path className="measure-arc" d="M152 244 A112 112 0 0 1 352 130" />
      <path className="measure-caliper" d="M112 286 H384 M112 270 V302 M384 270 V302" />
      <path className="measure-ticks" d="M148 278 V294 M184 278 V294 M220 278 V294 M256 278 V294 M292 278 V294 M328 278 V294" />
      <circle className="measure-point point-a" cx="152" cy="244" r="7" />
      <circle className="measure-point point-b" cx="352" cy="130" r="7" />
      <circle className="measure-point point-c" cx="260" cy="184" r="5" />
    </svg>
  );
}

function ModelReviewVisual() {
  return (
    <div className="review-visual review-model" aria-hidden="true">
      <span className="model-field field-one" />
      <span className="model-field field-two" />
      <span className="model-orbit orbit-one" />
      <span className="model-orbit orbit-two" />
      <span className="model-core" />
      <span className="model-node node-a" />
      <span className="model-node node-b" />
      <span className="model-node node-c" />
      <span className="model-vector vector-a" />
      <span className="model-vector vector-b" />
    </div>
  );
}

function LabelReviewVisual() {
  return (
    <div className="review-visual review-label" aria-hidden="true">
      <span className="label-signal signal-main" />
      <span className="label-noise noise-one" />
      <span className="label-noise noise-two" />
      <span className="label-noise noise-three" />
      <span className="label-tier tier-one" />
      <span className="label-tier tier-two" />
      <span className="label-tier tier-three" />
      <span className="label-tier tier-four" />
      <span className="label-marker" />
    </div>
  );
}

function ReviewVisual({ id }) {
  if (id === "measure") return <MeasureReviewVisual />;
  if (id === "model") return <ModelReviewVisual />;
  if (id === "label") return <LabelReviewVisual />;
  return <ObserveReviewVisual />;
}

export default function PatternClaimReview() {
  const [selectedId, setSelectedId] = useState(patternReviewSteps[0].id);
  const selected = useMemo(
    () => patternReviewSteps.find((step) => step.id === selectedId) || patternReviewSteps[0],
    [selectedId]
  );
  const SelectedIcon = reviewIcons[selected.id] || Telescope;

  return (
    <div className="review-shell">
      <div className={`glass-card review-stage review-stage-${selected.id}`}>
        <ReviewVisual id={selected.id} />

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
