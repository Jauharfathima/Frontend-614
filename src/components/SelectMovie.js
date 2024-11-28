import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SelectMovie.css";

function SelectMovie() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve state passed via navigation
  const { state } = location;

  // Check if state exists, and set default values if it doesn't
  const title = state?.title || "Unknown Title";
  const poster = state?.poster || "";
  const genres = state?.genres || [];
  const duration = state?.duration || "N/A";
  const synopsis = state?.synopsis || "No synopsis available.";

  return (
    <div className="select-movie-container">
      <div className="movie-details">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592;
        </button>
        <div className="movie-genres">
          {genres.map((genre, index) => (
            <span key={index} className="genre">
              {genre}
            </span>
          ))}
        </div>
        <h1 className="movie-title">{title}</h1>
        <p className="movie-duration">{duration}</p>
        <p className="movie-synopsis">{synopsis}</p>
        <button
          className="book-tickets-button"
          onClick={() => navigate("/select-theatre")}
        >
          Book Tickets
        </button>
      </div>
      <div className="movie-poster">
        {poster ? (
          <img src={poster} alt={title} className="poster-image" />
        ) : (
          <div className="no-poster">No Poster Available</div>
        )}
      </div>
    </div>
  );
}

export default SelectMovie;
