import React from "react";
import MovieCard from "./MovieCard";
import "./MovieSection.css";

function MovieSection({ title, movies }) {
  return (
    <section className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} poster={movie.poster} 
          genres={movie.genres} duration={movie.duration} synopsis={movie.synopsis} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
