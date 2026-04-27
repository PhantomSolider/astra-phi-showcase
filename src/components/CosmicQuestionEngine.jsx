import { AlertTriangle, BrainCircuit, Lightbulb, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { buildAstraPhiResponse, starterQuestions } from "../lib/aiEngine.js";

export default function CosmicQuestionEngine() {
  const [query, setQuery] = useState("Why do spiral galaxies have arms?");
  const [level, setLevel] = useState("college");

  const response = useMemo(
    () => buildAstraPhiResponse(query, level),
    [query, level]
  );

  return (
    <div className="engine-grid">
      <div className="glass-card engine-panel">
        <div className="panel-title">
          <BrainCircuit size={22} aria-hidden="true" />
          <div>
            <h3>Ask the cosmic tutor</h3>
            <p>
              Choose a level, ask a question, and get a structured local
              response.
            </p>
          </div>
        </div>

        <label className="input-label" htmlFor="cosmic-question">
          Your question
        </label>
        <div className="search-box">
          <Search size={18} aria-hidden="true" />
          <input
            id="cosmic-question"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about entropy, gravity, galaxies, black holes, or phi..."
            aria-describedby="question-hint"
          />
        </div>
        <p id="question-hint" className="sr-only">
          The local response engine recognizes common astronomy and physics
          topics and returns an explanation, analogy, and misconception check.
        </p>

        <label className="input-label" htmlFor="learning-level">
          Learning level
        </label>
        <select
          id="learning-level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="college">College student</option>
          <option value="astrophysics">Preparing for astrophysics</option>
        </select>

        <div className="starter-list" aria-label="Starter questions">
          {starterQuestions.map((question) => (
            <button
              key={question}
              type="button"
              aria-label={`Ask: ${question}`}
              onClick={() => setQuery(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <article className="glass-card response-card" aria-live="polite">
        <div className="response-kicker">
          <Sparkles size={18} aria-hidden="true" />
          <span>{response.levelLabel} response</span>
        </div>

        <h3>{response.title}</h3>

        <div className="response-block">
          <h4>Simple explanation</h4>
          <p>{response.simple}</p>
        </div>

        <div className="response-block">
          <h4>Deeper layer</h4>
          <p>{response.deeper}</p>
        </div>

        <div className="response-block analogy">
          <Lightbulb size={18} aria-hidden="true" />
          <div>
            <h4>Visual analogy</h4>
            <p>{response.analogy}</p>
          </div>
        </div>

        <div className="response-block warning">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <h4>Misconception check</h4>
            <p>{response.misconception}</p>
          </div>
        </div>

        <div className="next-question">
          <span>Next question:</span>
          <button type="button" onClick={() => setQuery(response.nextQuest)}>
            {response.nextQuest}
          </button>
        </div>
      </article>
    </div>
  );
}
