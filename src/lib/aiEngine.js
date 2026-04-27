import { conceptLibrary } from "../data/concepts.js";

const levelLabels = {
  beginner: "Beginner",
  college: "College Student",
  astrophysics: "Preparing for Astrophysics",
};

function detectConcept(query) {
  const normalized = query.toLowerCase();

  const match = Object.values(conceptLibrary).find((concept) =>
    concept.keywords?.some((keyword) => normalized.includes(keyword))
  );

  return match || conceptLibrary.default;
}

function getDepth(concept, level) {
  if (level === "beginner") return concept.simple;
  if (level === "college") return concept.college;
  return concept.advanced;
}

export function buildAstraPhiResponse(query, level = "college") {
  const cleanQuery = query?.trim();

  if (!cleanQuery) {
    return {
      title: "Ask Astra-Phi anything cosmic",
      levelLabel: levelLabels[level],
      simple:
        "Type a question about entropy, gravity, black holes, spiral galaxies, or the golden ratio.",
      deeper:
        "The engine will classify the topic and return a structured learning path.",
      analogy:
        "It works like a telescope for concepts: it does not replace thinking, but it helps you focus.",
      misconception:
        "Do not treat AI output as automatically true. Strong science still needs evidence, equations, and verification.",
      nextQuest: "Try: Why do spiral galaxies have arms?",
    };
  }

  const concept = detectConcept(cleanQuery);
  const depth = getDepth(concept, level);

  return {
    title: concept.title,
    levelLabel: levelLabels[level],
    simple: concept.simple,
    deeper: depth,
    analogy: concept.analogy,
    misconception: concept.misconception,
    nextQuest: concept.nextQuest,
  };
}

export const starterQuestions = [
  "Why do spiral galaxies have arms?",
  "What is entropy and why does time move forward?",
  "Does the golden ratio actually appear in space?",
  "What happens near a black hole?",
  "How does gravity curve spacetime?",
];
