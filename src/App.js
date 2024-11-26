import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const movies = {
    "Coming Soon": [
      { title: "Mufasa", poster: "./images/Mufasa.png" },
      { title: "Better Man", poster: "./images/Better Man.png" },
      { title: "Kraven", poster: "./images/Kraven.png" },
    ],
    "Now Showing": [
      { title: "The Wild Robot", poster: "./images/The Wild Robot.png" },
      { title: "Spider-Man: No Way Home", poster: "./images/Spidey.png" },
      { title: "Gladiator", poster: "./images/Gladiator II.png" },
    ],
  };

  // Filter movies based on the search query
  const filteredMovies = Object.keys(movies).reduce((result, section) => {
    result[section] = movies[section].filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    return result;
  }, {});

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {Object.entries(filteredMovies).map(([sectionTitle, sectionMovies]) => (
                  <MovieSection key={sectionTitle} title={sectionTitle} movies={sectionMovies} />
                ))}
                <Footer />
              </>
            }
          />
          <Route path="/details/:movieTitle" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
