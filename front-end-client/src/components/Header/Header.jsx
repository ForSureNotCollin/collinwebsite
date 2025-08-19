import { useState, useRef, useEffect } from "react";
import "./Header.css";

// --- Videography Component ---
const Videography = () => {
  const feedRef = useRef(null);
  let scrollInterval = null;

  const startScrolling = () => {
    if (!feedRef.current) return;
    scrollInterval = setInterval(() => {
      feedRef.current.scrollTop += 1;
      if (
        feedRef.current.scrollTop + feedRef.current.clientHeight >=
        feedRef.current.scrollHeight
      ) {
        feedRef.current.scrollTop = 0;
      }
    }, 30);
  };

  const stopScrolling = () => clearInterval(scrollInterval);

  return (
    <div>
      <h2>Videography Portfolio</h2>
      <div
        className="instagramWindow"
        ref={feedRef}
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >
        {/* Replace with your actual videos or thumbnails */}
        <div className="instaItem">🎬 Video 1</div>
        <div className="instaItem">🎬 Video 2</div>
        <div className="instaItem">🎬 Video 3</div>
        <div className="instaItem">🎬 Video 4</div>
      </div>

      <h3>Book a Shoot</h3>
      {/* Calendly embed example */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=YOUR_GOOGLE_CALENDAR_ID&ctz=America%2FChicago"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

// --- Coding Component ---
const Coding = () => {
  // Example projects, later you can fetch from GitHub or local JSON
  const projects = [
    { id: 1, name: "Portfolio Website", tech: "React, CSS", link: "#" },
    { id: 2, name: "Data Dashboard", tech: "Python, Flask", link: "#" },
    { id: 3, name: "E-commerce Store", tech: "Next.js, Node", link: "#" },
  ];

  return (
    <div>
      <h2>Coding Portfolio</h2>
      <div className="projectGrid">
        {projects.map((p) => (
          <div key={p.id} className="projectCard">
            <h4>{p.name}</h4>
            <p>{p.tech}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Contact Component ---
const Contact = () => (
  <div>
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
    <p>Phone: (123) 456-7890</p>
    <p>
      LinkedIn:{" "}
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
        linkedin.com/in/yourprofile
      </a>
    </p>
  </div>
);

// --- Main Header Component ---
const Header = () => {
  const [openMenu, setOpenMenu] = useState("home");

  const renderContent = () => {
    switch (openMenu) {
      case "videography":
        return <Videography />;
      case "coding":
        return <Coding />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div>
            <h1 className="coolHeader">Home</h1>
            <sub>Support by Wesley :)</sub>
          </div>
        );
    }
  };

  return (
    <div className="appLayout">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li onClick={() => setOpenMenu("home")}>Home</li>
          <li onClick={() => setOpenMenu("videography")}>Videography</li>
          <li onClick={() => setOpenMenu("coding")}>Coding</li>
          <li onClick={() => setOpenMenu("contact")}>Contact</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="mainContent">{renderContent()}</main>
    </div>
  );
};

export default Header;
