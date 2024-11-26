import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, poster }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    alert(selected ? `Unselected: ${title}` : `Selected: ${title}`);
  };

  return (
    <div className="movie-card">
      <div className={`card-overlay ${selected ? "selected" : ""}`}>
        <button className="select-button" onClick={handleSelect}>
          {selected ? "Unselect" : "Select"}
        </button>
      </div>
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-title">{title}</div>
    </div>
  );
}

export default MovieCard;
