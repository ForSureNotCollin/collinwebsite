// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import ProgressWheels from "./ProgressWheels";
import "./ProgressWheels.css";

const stats = [
  { label: "React", value: 85 },
  { label: "JavaScript", value: 90 },
  { label: "Backend", value: 70 },
  { label: "UI/UX", value: 60 },
];

export default function Dashboard() {
  // Text Phases
  const introText = "Hi! I'm Collin.";
  const detailText =
    " I enjoy building web applications, exploring new technologies, and working on projects that make a difference. This dashboard will showcase my work, skills, and coding projects.";

  const [displayedIntro, setDisplayedIntro] = useState("");
  const [displayedDetail, setDisplayedDetail] = useState("");
  const [introIndex, setIntroIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);
  const [startDetail, setStartDetail] = useState(false);

  // Phase 1 – Type intro
  useEffect(() => {
    if (introIndex < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedIntro((prev) => prev + introText[introIndex]);
        setIntroIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    // ✅ Wait for 2 cursor blinks (~2s) before starting Phase 2
    if (introIndex === introText.length) {
      const pause = setTimeout(() => {
        setStartDetail(true);
      }, 750); // 2 cursor blinks
      return () => clearTimeout(pause);
    }
  }, [introIndex, introText]);

  // Phase 2 – Type detail text after pause
  useEffect(() => {
    if (!startDetail) return;

    if (detailIndex < detailText.length) {
      const timeout = setTimeout(() => {
        setDisplayedDetail((prev) => prev + detailText[detailIndex]);
        setDetailIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [startDetail, detailIndex, detailText]);

  return (
    <div className="dashboard-container">
      <main className="dashboard-main">
        {/* ABOUT ME */}
        <section className="about-me">
          <h1>About Me</h1>

          <p className="typewriter">
            <strong>{displayedIntro}</strong>
            {displayedDetail}
            <span className="cursor">|</span>
          </p>
        </section>

        {/* Dashboard Content */}
        {startDetail && detailIndex === detailText.length && (
          <section className="dashboard-content fade-in">
            <h2>Dashboard Overview</h2>
            <p>Here you can display stats, project summaries, or recent activity.</p>
            <ProgressWheels stats={stats} />
          </section>
        )}
      </main>
    </div>
  );
}
