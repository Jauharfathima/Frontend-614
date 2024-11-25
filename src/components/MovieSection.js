import React from "react";
import MovieCard from "./MovieCard";
import "./MovieSection.css";

function MovieSection({ title, movies }) {
  return (
    <section className="movie-section">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} poster={movie.poster} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
