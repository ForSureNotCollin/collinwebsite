import React from "react";
import "./ProgressWheels.css";

export default function ProgressWheels({ stats }) {
  return (
    <div className="wheels-container">
      {stats.map((item, index) => (
        <ProgressWheel
          key={index}
          label={item.label}
          value={item.value}
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
        />
      </svg>

      <span className="wheel-label">{label}</span>
      <span className="wheel-value">{value}%</span>
    </div>
  );
}
