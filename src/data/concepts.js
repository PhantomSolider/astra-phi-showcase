export const conceptLibrary = {
  entropy: {
    id: "entropy",
    exhibitHref: "#archive",
    exhibitLabel: "Entropy archive",
    keywords: ["entropy", "time", "arrow", "disorder", "thermodynamics"],
    title: "Entropy and the Arrow of Time",
    simple:
      "Entropy measures how many tiny arrangements can lead to the same visible result. Systems tend to move toward states with more possible arrangements.",
    beginner:
      "The more ways something can happen, the more likely it becomes. Entropy explains why scattered, mixed, or spread-out states are usually easier to reach than perfectly ordered ones.",
    college:
      "In statistical mechanics, high-entropy states are far more likely because there are many more ways to make them. That probability tilt helps explain why time has a direction.",
    advanced:
      "Entropy is about multiplicity, information, and probability, not just mess. The second law is statistical: isolated systems almost always move toward larger sets of possible states.",
    analogy:
      "A clean room has only a few ways to be perfectly arranged. A messy room has countless ways to be messy. That is why mess wins statistically.",
    misconception:
      "Entropy does not mean the universe is instantly chaotic. Local order can grow, but it requires energy flow and increases entropy elsewhere.",
    nextPath:
      "Continue from entropy into gravity, stars, planets, and local pockets of order.",
  },
  gravity: {
    id: "gravity",
    exhibitHref: "#archive",
    exhibitLabel: "Gravity archive",
    keywords: ["gravity", "spacetime", "relativity", "einstein", "curvature"],
    title: "Gravity as Spacetime Curvature",
    simple:
      "Gravity is not just a pulling force. In Einstein's view, matter and energy curve spacetime, and objects follow paths through that curved geometry.",
    beginner:
      "Mass changes the shape of the paths around it. Planets, stars, and light move as if space itself has been bent around heavy objects.",
    college:
      "General relativity treats gravity as curvature caused by stress-energy. Free-falling objects follow geodesics, the straightest available paths through curved spacetime.",
    advanced:
      "The Einstein field equations connect spacetime curvature with energy, momentum, pressure, and stress. What we feel as gravity is motion through curved geometry.",
    analogy:
      "Imagine ants walking straight on a curved surface. Their paths can bend relative to each other even though each ant thinks it is moving straight.",
    misconception:
      "The rubber-sheet analogy is useful, but incomplete. It uses gravity to explain gravity and only shows two spatial dimensions.",
    nextPath:
      "Continue from gravity into black holes and event horizons.",
  },
  galaxies: {
    id: "galaxies",
    exhibitHref: "#phi-lab",
    exhibitLabel: "Phi Pattern Gallery",
    keywords: ["galaxy", "galaxies", "spiral", "arms", "milky way", "rotation"],
    title: "Spiral Galaxies and Pattern Formation",
    simple:
      "Spiral arms are bright wave-like patterns in stars, gas, and dust. They are not fixed solid arms.",
    beginner:
      "A spiral galaxy is more like a moving pattern than a solid pinwheel. Stars and gas travel through the arms while the bright spiral shape stays visible.",
    college:
      "Spiral arms can come from density waves, gravity between galaxies, star formation, and disk motion. They are patterns moving through galactic material.",
    advanced:
      "Galactic spiral structure involves self-gravity, differential rotation, resonances, instabilities, and sometimes tidal effects. Real galaxies rarely match perfect mathematical spirals.",
    analogy:
      "Think of a traffic jam moving along a highway. The cars pass through it, but the jam pattern remains visible.",
    misconception:
      "Spiral galaxies may look like golden spirals, but visual similarity is not proof of a true golden-ratio structure.",
    nextPath:
      "Continue from spiral structure into galaxy rotation and unseen mass.",
  },
  blackholes: {
    id: "blackholes",
    exhibitHref: "#simulators",
    exhibitLabel: "Event horizon demonstration",
    keywords: ["black hole", "blackhole", "hawking", "event horizon", "singularity"],
    title: "Black Holes and Event Horizons",
    simple:
      "A black hole is a region where gravity is so intense that beyond a boundary called the event horizon, light cannot escape.",
    beginner:
      "A black hole has a point of no return. Outside that boundary, light and matter can still move away; inside it, every path leads deeper inward.",
    college:
      "Black holes are solutions to general relativity where curved spacetime creates a causal boundary. The event horizon is not a material surface; it is a point of no return.",
    advanced:
      "Black hole thermodynamics links horizon area, entropy, temperature, and quantum effects. Hawking radiation suggests black holes can slowly lose mass over immense timescales.",
    analogy:
      "Imagine a river flowing faster than you can swim. Past a certain point, no matter how hard you swim, the current carries you inward.",
    misconception:
      "Black holes are not cosmic vacuum cleaners. Far away, their gravity behaves like any object with the same mass.",
    nextPath:
      "Continue from event horizons into black hole thermodynamics.",
  },
  phi: {
    id: "phi",
    exhibitHref: "#pattern-review",
    exhibitLabel: "Pattern Claim Review",
    keywords: ["phi", "golden", "ratio", "fibonacci", "spiral"],
    title: "Phi, Fibonacci, and Scientific Honesty",
    simple:
      "Phi is a mathematical ratio, about 1.618, that appears in some growth patterns and geometric relationships. It does not explain everything in nature.",
    beginner:
      "Phi is a beautiful number pattern, but beauty is not proof. A spiral or shape needs measurement before anyone can say it really follows Phi.",
    college:
      "Fibonacci-like patterns can emerge in phyllotaxis and optimization problems, but claims about phi must be tested with measurements, not just visual overlays.",
    advanced:
      "The golden ratio has deep mathematical properties, but real systems are noisy and shaped by physics. A spiral needs measurement before anyone can call it a golden spiral.",
    analogy:
      "Phi is like a powerful chord in music. It appears in beautiful places, but not every beautiful song uses that chord.",
    misconception:
      "Seeing a spiral does not automatically mean seeing the golden ratio. A true claim needs data and measurement.",
    nextPath:
      "Continue from Phi into pattern review and evidence labels.",
  },
  default: {
    id: "default",
    exhibitHref: "#archive",
    exhibitLabel: "Cosmic Concepts Archive",
    keywords: [],
    title: "Cosmic Learning Path",
    simple:
      "Astra-Phi organizes big astronomy and physics ideas into simple explanations, deeper science, visual analogies, and misconception checks.",
    beginner:
      "Start with the main idea, then compare it with evidence. The goal is to leave with a clearer way to judge cosmic patterns.",
    college:
      "Strong science learning connects curiosity to models, evidence, limits, and math. The goal is not to memorize facts; it is to learn how to think with evidence.",
    advanced:
      "A useful scientific explanation names its assumptions, describes the model, explains where it works, and marks where it becomes incomplete.",
    analogy:
      "Think of the universe as a book written in patterns. Astra-Phi helps you read the patterns without pretending every shape is the same word.",
    misconception:
      "Wonder and skepticism are not enemies. The best science uses both.",
    nextPath:
      "Continue through entropy, gravity, black holes, spiral galaxies, and the golden ratio.",
  },
};

export const phiExamples = [
  {
    id: "spiral-galaxy",
    label: "Spiral galaxy",
    claim: "Some spiral galaxies visually resemble logarithmic or golden spirals.",
    evidence: "Weak to moderate",
    verdict: "The resemblance can be real, but a golden-ratio claim needs measurement.",
    score: 48,
    evidenceScore: 38,
    kind: "Approximate / debated",
    exhibitNote:
      "This exhibit is a good starting point. Galaxy arms also come from disk motion, density waves, interactions, and star formation.",
  },
  {
    id: "sunflower",
    label: "Sunflower seed pattern",
    claim: "Fibonacci-like counts can appear in seed arrangements.",
    evidence: "Strong in many biological examples",
    verdict: "This has better support because the pattern can be counted and measured.",
    score: 82,
    evidenceScore: 86,
    kind: "Scientifically supported",
    exhibitNote:
      "This is the strongest exhibit in the gallery because the pattern connects to efficient packing.",
  },
  {
    id: "hurricane",
    label: "Hurricane spiral",
    claim: "Hurricanes are often described as golden spirals.",
    evidence: "Usually weak",
    verdict: "Hurricanes can be spiral-shaped, but a golden overlay alone is not evidence.",
    score: 31,
    evidenceScore: 24,
    kind: "Mostly aesthetic",
    exhibitNote:
      "The swirl is real. The stronger explanation is atmospheric rotation, pressure, moisture, and heat.",
  },
  {
    id: "shell",
    label: "Nautilus shell",
    claim: "Nautilus shells are perfect golden spirals.",
    evidence: "Often overstated",
    verdict: "Shells can follow logarithmic growth, but not necessarily the exact golden ratio.",
    score: 42,
    evidenceScore: 32,
    kind: "Overclaimed",
    exhibitNote:
      "This is a useful caution case. Logarithmic growth and exact Phi are not the same claim.",
  },
];

export const simulatorCards = [
  {
    id: "entropy",
    title: "Entropy Drift",
    subtitle: "Why order is temporary",
    body:
      "Particles spread into more likely arrangements. Local order can exist, but the larger system still pays an entropy cost.",
    metric: "Probability wins",
    observe: "The cluster loosens into many possible arrangements, showing why high-entropy states are statistically favored.",
    limitation:
      "This is an intuition model, not a particle simulation with temperature, collisions, or conservation laws.",
    archiveHref: "#archive",
  },
  {
    id: "gravity",
    title: "Gravity Well",
    subtitle: "Curved paths, not invisible strings",
    body:
      "Mass-energy shapes spacetime. Objects move through the geometry and appear to accelerate toward gravity sources.",
    metric: "Curvature guides motion",
    observe: "The falling dot follows the curved well to show geometry guiding motion.",
    limitation:
      "The well is a teaching metaphor. Real spacetime curvature is four-dimensional and not caused by a visible bowl.",
    archiveHref: "#archive",
  },
  {
    id: "orbit",
    title: "Orbital Motion",
    subtitle: "Falling sideways forever",
    body:
      "An orbit balances forward motion with gravitational falling. The object keeps missing the central body.",
    metric: "Velocity + gravity",
    observe: "The path stays bounded because sideways motion and inward acceleration keep trading roles.",
    limitation:
      "The display is not scaled to real orbital mechanics; it is a compact visual cue.",
    archiveHref: "#archive",
  },
  {
    id: "blackhole",
    title: "Event Horizon",
    subtitle: "The causal boundary",
    body:
      "Past the event horizon, all future paths point inward. The horizon is not a surface; it is a boundary in spacetime.",
    metric: "No escape paths",
    observe: "The bright ring suggests infalling material around a dark causal boundary.",
    limitation:
      "The animation is symbolic. Real black hole images depend on relativity, plasma physics, and viewing angle.",
    archiveHref: "#archive",
  },
  {
    id: "galaxy",
    title: "Galaxy Rotation",
    subtitle: "The dark matter clue",
    body:
      "Outer stars in galaxies often move faster than visible matter alone predicts, suggesting unseen mass or new physics.",
    metric: "Rotation curve mystery",
    observe: "The curve hints that galaxy motion does not drop off as simply as visible matter alone predicts.",
    limitation:
      "This card is a clue, not a full dark matter model or measured rotation curve.",
    archiveHref: "#archive",
  },
];

export const evidenceLevels = [
  {
    level: "Measured",
    description: "Supported by direct data, repeatable measurement, or strong modeling.",
    example: "Best for claims with observations, counts, or tested equations.",
  },
  {
    level: "Modeled",
    description: "Supported by a useful model, but still dependent on assumptions and approximations.",
    example: "Useful when the model explains data and clearly states its limits.",
  },
  {
    level: "Approximate",
    description: "The pattern is partially present, but the match is imperfect or context-dependent.",
    example: "Good for rough similarities that still need careful measurement.",
  },
  {
    level: "Aesthetic",
    description: "The pattern looks convincing, but the claim has not been proven.",
    example: "A visual overlay belongs here until data supports it.",
  },
  {
    level: "Speculative",
    description: "Interesting idea, but evidence is weak, incomplete, or currently missing.",
    example: "A place for open investigation, not conclusions.",
  },
];

export const conceptArchive = [
  {
    id: "entropy",
    label: "Entropy",
    subtitle: "Probability gives time its direction",
    family: "Thermodynamics",
    summary:
      "Entropy is a way to count how many microscopic arrangements can create the same visible state. More possible arrangements usually means a more likely state.",
    takeaway:
      "Order can appear locally, but it needs energy flow and a wider entropy cost.",
    anchor: "#simulators",
    action: "See entropy drift",
    color: "crimson",
  },
  {
    id: "gravity",
    label: "Gravity",
    subtitle: "Mass-energy shapes paths through spacetime",
    family: "Relativity",
    summary:
      "General relativity describes gravity as curved spacetime. Objects in free fall follow the straightest available paths through that curved geometry.",
    takeaway:
      "The rubber-sheet picture is a metaphor, not the full four-dimensional model.",
    anchor: "#simulators",
    action: "Open gravity well",
    color: "gold",
  },
  {
    id: "blackholes",
    label: "Black Holes",
    subtitle: "A boundary where escape paths end",
    family: "Relativity + quantum frontiers",
    summary:
      "A black hole has an event horizon: a causal boundary beyond which light cannot escape outward.",
    takeaway:
      "Black holes are not vacuum cleaners; from far away, gravity depends on mass just like any other object.",
    anchor: "#simulators",
    action: "View event horizon",
    color: "violet",
  },
  {
    id: "galaxies",
    label: "Galaxy Structure",
    subtitle: "Spiral arms are patterns, not solid arms",
    family: "Astrophysics",
    summary:
      "Spiral arms can come from density waves, disk dynamics, star formation, and interactions. Real galaxies rarely match perfect mathematical curves.",
    takeaway:
      "A spiral shape can be a clue, but measurement decides what kind of pattern it is.",
    anchor: "#phi-lab",
    action: "Compare spiral claims",
    color: "rose",
  },
  {
    id: "phi",
    label: "Phi",
    subtitle: "A beautiful ratio with limits",
    family: "Pattern analysis",
    summary:
      "Phi is a mathematical ratio near 1.618. It appears in some measured contexts, but visual resemblance alone is not proof.",
    takeaway:
      "The golden ratio is powerful mathematics, not a universal explanation for nature.",
    anchor: "#pattern-review",
    action: "Review a claim",
    color: "green",
  },
  {
    id: "light",
    label: "Light",
    subtitle: "The messenger of the universe",
    family: "Observation",
    summary:
      "Light carries information about distance, motion, temperature, and composition. Much of astronomy is the art of reading that signal carefully.",
    takeaway:
      "A telescope is not just a camera; it is a measurement instrument.",
    anchor: "#knowledge-console",
    action: "Open the console",
    color: "crimson",
  },
];

export const patternReviewSteps = [
  {
    id: "observe",
    label: "Observe",
    title: "Notice the pattern",
    description:
      "Start with what is actually visible: a spiral, count, curve, rhythm, or repeated structure.",
    check: "First, describe only what can be seen before adding a claim.",
  },
  {
    id: "measure",
    label: "Measure",
    title: "Collect numbers",
    description:
      "A credible pattern needs counts, angles, ratios, uncertainty, or a repeatable method.",
    check: "A stronger claim can be measured again by someone else.",
  },
  {
    id: "model",
    label: "Model",
    title: "Explain the mechanism",
    description:
      "The strongest claims connect the measurement to physics, biology, geometry, or another working model.",
    check: "A useful model explains the process that could make the pattern appear.",
  },
  {
    id: "label",
    label: "Label",
    title: "Name the evidence level",
    description:
      "After observation, measurement, and modeling, the claim can be marked as measured, modeled, approximate, aesthetic, or speculative.",
    check: "The final label should match the strength of the evidence.",
  },
];

export const observatoryTakeaways = [
  {
    title: "Beauty starts the investigation.",
    text: "A striking spiral, glow, orbit, or rhythm is a reason to look closer, not a conclusion by itself.",
  },
  {
    title: "Measurement changes the conversation.",
    text: "Once a claim has numbers, uncertainty, and repeatable methods, it can move up the evidence wall.",
  },
  {
    title: "Models need boundaries.",
    text: "Every visual in Astra-Phi is symbolic. Each one explains an idea while naming what it leaves out.",
  },
];
