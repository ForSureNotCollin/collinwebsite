import React, { useState, useEffect } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Text animation for headers
  const mainHeaderText = "Contact Me";
  const subHeaderText = "Let's get in touch!";
  const [displayedMain, setDisplayedMain] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Typewriter for main header
  useEffect(() => {
    if (mainIndex < mainHeaderText.length) {
      const timeout = setTimeout(() => {
        setDisplayedMain((prev) => prev + mainHeaderText[mainIndex]);
        setMainIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // After main header finishes, start sub header
      const pause = setTimeout(() => setSubIndex(0), 300);
      return () => clearTimeout(pause);
    }
  }, [mainIndex]);

  // Typewriter for sub header
  useEffect(() => {
    if (mainIndex < mainHeaderText.length) return;
    if (subIndex < subHeaderText.length) {
      const timeout = setTimeout(() => {
        setDisplayedSub((prev) => prev + subHeaderText[subIndex]);
        setSubIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      // Show form after sub header finishes
      const pause = setTimeout(() => setShowForm(true), 300);
      return () => clearTimeout(pause);
    }
  }, [subIndex, mainIndex]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We'll chat soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="contactPage">
      <header className="contactHeader">
        <h1 className="typewriter">
          {displayedMain}
          <span className="cursor">|</span>
        </h1>
        {displayedMain.length === mainHeaderText.length && (
          <h2 className="typewriter">
            {displayedSub}
            <span className="cursor">|</span>
          </h2>
        )}
      </header>

      {showForm && (
        <form className="contactForm fade-in" onSubmit={handleSubmit}>
          <label className="formField-Name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your Name : First Last"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="FormField-Email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="FormField-Message">
            Message:
            <textarea
              name="message"
              placeholder="Leave your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Contact</button>
        </form>
      )}
    </main>
  );
}
