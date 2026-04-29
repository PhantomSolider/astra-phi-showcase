import { conceptLibrary } from "../data/concepts.js";

const levelLabels = {
  beginner: "Beginner",
  college: "College Student",
  astrophysics: "Preparing for Astrophysics",
};

const levelDetails = {
  beginner: {
    label: levelLabels.beginner,
    shortLabel: "Beginner",
    focus: "Plain language",
    lens: "Starts with the big idea and keeps the vocabulary light.",
    depthLabel: "Beginner placard",
  },
  college: {
    label: levelLabels.college,
    shortLabel: "College",
    focus: "Models and terms",
    lens:
      "Adds the scientific model and the terms you would see in an intro course.",
    depthLabel: "College placard",
  },
  astrophysics: {
    label: levelLabels.astrophysics,
    shortLabel: "Astrophysics",
    focus: "Limits and math clues",
    lens:
      "Points out the mechanisms, assumptions, and math ideas behind the claim.",
    depthLabel: "Astrophysics prep placard",
  },
};

export const learningLevels = Object.entries(levelDetails).map(
  ([value, details]) => ({
    value,
    label: details.label,
    shortLabel: details.shortLabel,
    focus: details.focus,
  })
);

export const knowledgeEntries = [
  {
    id: "galaxies",
    label: "Spiral galaxies",
    subtitle: "Patterns in moving star fields",
    nextId: "phi",
  },
  {
    id: "entropy",
    label: "Entropy",
    subtitle: "Probability and time's direction",
    nextId: "gravity",
  },
  {
    id: "gravity",
    label: "Gravity",
    subtitle: "Curved paths through spacetime",
    nextId: "blackholes",
  },
  {
    id: "blackholes",
    label: "Black holes",
    subtitle: "Boundaries where escape paths end",
    nextId: "entropy",
  },
  {
    id: "phi",
    label: "Phi and evidence",
    subtitle: "Beauty, ratios, and measurement",
    nextId: "galaxies",
  },
];

const entryMap = Object.fromEntries(
  knowledgeEntries.map((entry) => [entry.id, entry])
);

function getDepth(concept, level) {
  if (level === "beginner") return concept.simple;
  if (level === "college") return concept.college;
  return concept.advanced;
}

export function buildKnowledgeConsoleEntry(entryId, level = "college") {
  const entry = entryMap[entryId] || knowledgeEntries[0];
  const levelInfo = levelDetails[level] || levelDetails.college;
  const concept = conceptLibrary[entry.id] || conceptLibrary.default;
  const depth = getDepth(concept, level);
  const nextEntry = entryMap[entry.nextId] || knowledgeEntries[0];

  return {
    title: concept.title,
    entryLabel: entry.label,
    entrySubtitle: entry.subtitle,
    levelLabel: levelInfo.label,
    levelFocus: levelInfo.focus,
    levelLens: levelInfo.lens,
    depthLabel: levelInfo.depthLabel,
    matchedTopic: concept.title,
    engineNote: "Curated exhibit text; no external service.",
    simple: concept.simple,
    deeper: depth,
    analogy: concept.analogy,
    misconception: concept.misconception,
    nextEntryId: nextEntry.id,
    nextEntryLabel: `Open ${nextEntry.label}`,
    exhibitHref: concept.exhibitHref,
    exhibitLabel: concept.exhibitLabel,
  };
}
