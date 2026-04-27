export const conceptLibrary = {
  entropy: {
    keywords: ["entropy", "time", "arrow", "disorder", "thermodynamics"],
    title: "Entropy and the Arrow of Time",
    simple:
      "Entropy is a way of measuring how many microscopic arrangements can produce the same visible state. Systems naturally drift toward states with more possible arrangements.",
    college:
      "In statistical mechanics, entropy increases because high-entropy macrostates correspond to vastly more microstates than low-entropy macrostates. That statistical imbalance gives time a direction.",
    advanced:
      "Entropy is not merely disorder. It is linked to multiplicity, information, and probability. The second law is statistical: isolated systems overwhelmingly evolve toward macrostates with greater phase-space volume.",
    analogy:
      "A clean room has only a few ways to be perfectly arranged. A messy room has countless ways to be messy. That is why messiness wins statistically.",
    misconception:
      "Entropy does not mean the universe is instantly chaotic. Local order can grow, but it requires energy flow and increases entropy elsewhere.",
    nextQuest:
      "How can stars, planets, and life form if entropy tends to increase?",
  },
  gravity: {
    keywords: ["gravity", "spacetime", "relativity", "einstein", "curvature"],
    title: "Gravity as Spacetime Curvature",
    simple:
      "Gravity is not just a pulling force. In Einstein's view, matter and energy curve spacetime, and objects follow paths through that curved geometry.",
    college:
      "General relativity models gravity as curvature produced by stress-energy. Free-falling objects move along geodesics, which are the straightest possible paths in curved spacetime.",
    advanced:
      "The Einstein field equations relate local spacetime curvature to energy, momentum, pressure, and stress. What we feel as gravity is motion through a non-Euclidean geometry.",
    analogy:
      "Imagine ants walking straight on a curved surface. Their paths can bend relative to each other even though each ant thinks it is moving straight.",
    misconception:
      "The rubber-sheet analogy is useful, but incomplete. It uses gravity to explain gravity and only shows two spatial dimensions.",
    nextQuest:
      "What would happen to time near a black hole?",
  },
  galaxies: {
    keywords: ["galaxy", "galaxies", "spiral", "arms", "milky way", "rotation"],
    title: "Spiral Galaxies and Pattern Formation",
    simple:
      "Spiral arms are regions where stars, gas, and dust are organized into bright wave-like patterns. The arms are not fixed solid structures.",
    college:
      "Spiral arms can be explained through density wave theory, gravitational interactions, star formation feedback, and disk dynamics. They are patterns moving through galactic material.",
    advanced:
      "Galactic spiral structure involves self-gravity, differential rotation, resonances, instabilities, and sometimes tidal perturbations. Real galaxies rarely match perfect mathematical spirals.",
    analogy:
      "Think of a traffic jam moving along a highway. The cars pass through it, but the jam pattern remains visible.",
    misconception:
      "Spiral galaxies may look like golden spirals, but visual similarity is not proof of a true golden-ratio structure.",
    nextQuest:
      "Why do galaxy rotation curves suggest dark matter?",
  },
  blackholes: {
    keywords: ["black hole", "blackhole", "hawking", "event horizon", "singularity"],
    title: "Black Holes and Event Horizons",
    simple:
      "A black hole is a region where gravity is so intense that beyond a boundary called the event horizon, light cannot escape.",
    college:
      "Black holes are solutions to general relativity where spacetime curvature creates a causal boundary. The event horizon is not a material surface; it is a point of no return.",
    advanced:
      "Black hole thermodynamics links horizon area, entropy, temperature, and quantum effects. Hawking radiation suggests black holes can slowly lose mass over enormous timescales.",
    analogy:
      "Imagine a river flowing faster than you can swim. Past a certain point, no matter how hard you swim, the current carries you inward.",
    misconception:
      "Black holes are not cosmic vacuum cleaners. Far away, their gravity behaves like any object with the same mass.",
    nextQuest:
      "What is Hawking radiation, and why does it matter?",
  },
  phi: {
    keywords: ["phi", "golden", "ratio", "fibonacci", "spiral"],
    title: "Phi, Fibonacci, and Scientific Honesty",
    simple:
      "Phi is a mathematical ratio, about 1.618, that appears in some growth patterns and geometric relationships. But it does not explain everything in nature.",
    college:
      "Fibonacci-like patterns can emerge in phyllotaxis and optimization problems, but claims about phi must be tested with measurements, not just visual overlays.",
    advanced:
      "The golden ratio has deep mathematical properties, but real systems are noisy, constrained, and shaped by physics. Apparent logarithmic spirals require parameter estimation before being called golden spirals.",
    analogy:
      "Phi is like a powerful chord in music. It appears in beautiful places, but not every beautiful song uses that chord.",
    misconception:
      "Seeing a spiral does not automatically mean seeing the golden ratio. A true claim needs data and measurement.",
    nextQuest:
      "How do scientists test whether a pattern is real or just visually convincing?",
  },
  default: {
    keywords: [],
    title: "Cosmic Learning Path",
    simple:
      "Astra-Phi can break big astronomy and physics questions into simple explanations, deeper scientific meaning, visual analogies, and misconception checks.",
    college:
      "Strong science learning connects curiosity to models, evidence, limits, and mathematical structure. The goal is not to memorize facts; it is to learn how to think with evidence.",
    advanced:
      "A useful scientific explanation identifies assumptions, describes the model being used, explains where it works, and clearly marks where the model becomes incomplete.",
    analogy:
      "Think of the universe as a book written in patterns. Astra-Phi helps you read the patterns without pretending every shape is the same word.",
    misconception:
      "Wonder and skepticism are not enemies. The best science uses both.",
    nextQuest:
      "Try asking about entropy, gravity, black holes, spiral galaxies, or the golden ratio.",
  },
};

export const phiExamples = [
  {
    id: "spiral-galaxy",
    label: "Spiral galaxy",
    claim: "Some spiral galaxies visually resemble logarithmic or golden spirals.",
    evidence: "Weak to moderate",
    verdict: "Aesthetic resemblance is common, but real galaxies require measurement before a golden-ratio claim is justified.",
    score: 48,
    kind: "Approximate / debated",
  },
  {
    id: "sunflower",
    label: "Sunflower seed pattern",
    claim: "Fibonacci-like counts can appear in seed arrangements.",
    evidence: "Strong in many biological examples",
    verdict: "This has better support because phyllotaxis can be measured and related to packing efficiency.",
    score: 82,
    kind: "Scientifically supported",
  },
  {
    id: "hurricane",
    label: "Hurricane spiral",
    claim: "Hurricanes are often described as golden spirals.",
    evidence: "Usually weak",
    verdict: "Hurricanes can be spiral-shaped, but fluid dynamics controls the structure. A golden overlay alone is not evidence.",
    score: 31,
    kind: "Mostly aesthetic",
  },
  {
    id: "shell",
    label: "Nautilus shell",
    claim: "Nautilus shells are perfect golden spirals.",
    evidence: "Often overstated",
    verdict: "Shells can follow logarithmic growth, but not necessarily the exact golden ratio.",
    score: 42,
    kind: "Overclaimed",
  },
];

export const simulatorCards = [
  {
    id: "entropy",
    title: "Entropy Drift",
    subtitle: "Why order is temporary",
    body:
      "Particles spread into more probable arrangements. Local order can exist, but the total system still pays an entropy cost.",
    metric: "Probability wins",
  },
  {
    id: "gravity",
    title: "Gravity Well",
    subtitle: "Curved paths, not invisible strings",
    body:
      "Mass-energy shapes spacetime. Objects move through the geometry and appear to accelerate toward gravity sources.",
    metric: "Curvature guides motion",
  },
  {
    id: "orbit",
    title: "Orbital Motion",
    subtitle: "Falling sideways forever",
    body:
      "An orbit is a balance between forward motion and gravitational falling. The object keeps missing the central body.",
    metric: "Velocity + gravity",
  },
  {
    id: "blackhole",
    title: "Event Horizon",
    subtitle: "The causal boundary",
    body:
      "Past the event horizon, all future paths point inward. The horizon is not a surface; it is a boundary in spacetime.",
    metric: "No escape paths",
  },
  {
    id: "galaxy",
    title: "Galaxy Rotation",
    subtitle: "The dark matter clue",
    body:
      "Outer stars in galaxies often move faster than visible matter alone predicts, suggesting unseen mass or new physics.",
    metric: "Rotation curve mystery",
  },
];

export const evidenceLevels = [
  {
    level: "Measured",
    description: "Supported by direct data, repeatable measurement, or strong mathematical modeling.",
  },
  {
    level: "Modeled",
    description: "Supported by a useful model, but still dependent on assumptions and approximations.",
  },
  {
    level: "Approximate",
    description: "The pattern is partially present, but the match is imperfect or context-dependent.",
  },
  {
    level: "Aesthetic",
    description: "The pattern looks convincing visually, but the claim has not been proven.",
  },
  {
    level: "Speculative",
    description: "Interesting idea, but evidence is weak, incomplete, or currently missing.",
  },
];
