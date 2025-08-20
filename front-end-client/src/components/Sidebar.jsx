// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/videography">Videography</Link>
        </li>
        <li>
          <Link to="/coding">Coding</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
