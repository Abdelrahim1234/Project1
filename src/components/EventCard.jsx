import React from "react";
import "../styles/styles.css";

export default function EventCard({ event }) {
  return (
    <div className="card">
      <img src={event.image} alt={event.title} className="card-image" />
      <h2 className="card-title">{event.title}</h2>
      <p className="card-date">{event.date}</p>
      <p className="card-location">{event.location}</p>
      <a href={event.mapsLink} target="_blank" rel="noopener noreferrer">
        <button className="card-button">More Info</button>
      </a>
    </div>
  );
}
