import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieTitle } = useParams();

  return (
    <div className="movie-details">
      <h1>{movieTitle}</h1>
      <p>
        This is the details page for the movie <strong>{movieTitle}</strong>.
        Add more details about the movie here, such as its synopsis, release
        date, cast, and trailer.
      </p>
    </div>
  );
}

export default MovieDetails;
