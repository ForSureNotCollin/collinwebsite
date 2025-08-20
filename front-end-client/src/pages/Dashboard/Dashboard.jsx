// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import './Dashboard.css'; // optional, for styling

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>Coding</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </aside>

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
        </section>
      </main>
    </div>
  );
}
