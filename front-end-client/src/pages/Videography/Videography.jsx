// src/pages/Videography/Videography.jsx
import React, { useState } from "react";
import './Videography.css';

// Example locally imported videos
import Video1 from "../../assets/videos/Video1.mp4";
import Video2 from "../../assets/videos/Video2.mp4";
import Video3 from "../../assets/videos/Video3.mp4";
import Video4 from "../../assets/videos/Video4.mp4";
import Video5 from "../../assets/videos/Video5.mp4";
import Video6 from "../../assets/videos/Video6.mov";
import Video7 from "../../assets/videos/Video7.mp4";
import Video8 from "../../assets/videos/Video8.mp4";


export default function Videography() {
  const videos = [Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrentIndex((currentIndex + 1) % videos.length);
  };

  return (
    <main className="videography-page">
      <header className="videography-header">
        <h1>Videography Projects</h1>
      </header>

      {/* Video Carousel */}
      <section className="video-carousel">
        <button className="carousel-btn" onClick={prevVideo}>◀</button>
        <video
          key={currentIndex}
          src={videos[currentIndex]}
          controls
          className="carousel-video"
        />
        <button className="carousel-btn" onClick={nextVideo}>▶</button>
      </section>

      {/* Google Calendar Booking Section */}
      <section className="booking-calendar">
        <h2>Book a Session</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id_here&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Booking Calendar"
        ></iframe>
      </section>
    </main>
  );
}
