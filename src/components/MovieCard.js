import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, poster }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    alert(`Selected Movie: ${title}`);
  };

  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-title">{title}</div>
      <button className="select-button" onClick={handleSelect}>
        {selected ? "Unselect Movie" : "Select Movie"}
      </button>
    </div>
  );
}

export default MovieCard;
