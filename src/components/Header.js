import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ title, poster }) {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate(`/details/${title}`);
  };

  return (
    <div className="movie-card">
      <div className="card-overlay">
        <button className="select-button" onClick={handleSelect}>
          Select
        </button>
      </div>
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-title">{title}</div>
    </div>
  );
}

export default MovieCard;
