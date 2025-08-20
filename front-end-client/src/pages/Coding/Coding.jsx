// src/pages/Coding/Coding.jsx
import React from "react";
import './Coding.css'; // optional, for styling

export default function Coding() {
  return (
    <main className="coding-page">
      {/* Header */}
      <header className="coding-header">
        <h1>Coding Projects</h1>
      </header>

      {/* GitHub-style Code Window */}
      <section className="code-window">
        <div className="code-window-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <pre className="code-content">
{`// Example Code
function helloWorld() {
  console.log("Hello, world!");
}`}
        </pre>
      </section>

      {/* Other Projects Section */}
      <section className="projects-list">
        <h2>Other Projects</h2>
        <ul>
          <li>Project 1: React App</li>
          <li>Project 2: Node API</li>
          <li>Project 3: Personal Website</li>
        </ul>
      </section>
    </main>
  );
}
