import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ title, poster, genres, duration, synopsis }) {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/select-movie", {
      state: {
        title,
        poster,
        genres,
        duration,
        synopsis,
      },
    });
  };

  return (
    <div className="movie-card" onClick={handleSelect}>
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-title">{title}</div>
    </div>
  );
}

export default MovieCard;
