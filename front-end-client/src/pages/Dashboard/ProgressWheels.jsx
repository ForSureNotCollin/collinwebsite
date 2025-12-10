import React, { useState, useEffect } from "react";
import "./ProgressWheels.css";

export default function ProgressWheels({ stats }) {
  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    stats.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1500; // total animation time in ms
      const stepTime = 15; // update every 15ms
      const increment = (end / duration) * stepTime;

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setAnimatedValues(prev => {
          const newVals = [...prev];
          newVals[index] = Math.round(start);
          return newVals;
        });
      }, stepTime);
    });
  }, [stats]);

  return (
    <div className="wheels-container">
      {stats.map((item, index) => (
        <ProgressWheel
          key={index}
          label={item.label}
          value={animatedValues[index]}
          size={120}
          strokeWidth={10}
        />
      ))}
    </div>
  );
}

function ProgressWheel({ label, value, size, strokeWidth }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="wheel">
      <svg width={size} height={size}>
        <circle
          className="bg-circle"
          stroke="#eee"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-circle"
          stroke="#4C9AFF"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <span className="wheel-label">{label}</span>
      <span className="wheel-value">{value}%</span>
    </div>
  );
}
