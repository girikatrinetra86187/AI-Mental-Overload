import React, { useState } from "react";
import "./App.css";
import bgImage from "./images/mental-health.webp";

function App() {
  const [name, setName] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [screenTime, setScreenTime] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 0;

    score += Number(stressLevel);
    score += Number(screenTime);

    if (sleepHours < 6) {
      score += 5;
    }

    if (score >= 15) {
      setResult("⚠ High Mental Overload Detected");
    } else if (score >= 8) {
      setResult("⚡ Moderate Mental Overload");
    } else {
      setResult("✅ Low Mental Overload");
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay">

        <div className="card">

          <h1>AI Mental Overload Prediction</h1>

          <p className="subtitle">
            Analyze stress, sleep, and screen time levels
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Stress Level (1-10)"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Sleep Hours"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Screen Time (Hours)"
              value={screenTime}
              onChange={(e) => setScreenTime(e.target.value)}
              required
            />

            <button type="submit">
              Predict Mental State
            </button>

          </form>

          {result && (
            <div className="result-box">
              <h2>Hello, {name}</h2>
              <p>{result}</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;