// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import './Dashboard.css'; // optional, for styling
import ProgressWheels from "./ProgressWheels";
import './ProgressWheels.css' ;


const stats = [
  { label: "React", value: 85 },
  { label: "JavaScript", value: 90 },
  { label: "Backend", value: 70 },
  { label: "UI/UX", value: 60 },
];

<section className="dashboard-content">
  <h2>Skill Overview</h2>
  <ProgressWheels stats={stats} />
</section>

export default function Dashboard() {
  return (
    
    <div className="dashboard-container">
      {/* Main Content */}
      <main className="dashboard-main">
        {/* About Me Section */}
        <section className="about-me">
          <h1>About Me</h1>
          <p>
            Hi! I'm Collin. I enjoy building web applications, exploring new technologies,
            and working on projects that make a difference. This dashboard will showcase my
            work, skills, and coding projects.
          </p>
        </section>

        {/* Placeholder for other dashboard content */}
        <section className="dashboard-content">
          <h2>Dashboard Overview</h2>
          <p>Here you can display stats, project summaries, or recent activity.</p>
          <ProgressWheels stats = {stats} />
        </section>
      </main>
    </div>
  );
}
