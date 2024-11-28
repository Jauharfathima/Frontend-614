import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import SelectMovie from "./components/SelectMovie";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const movies = {
    "Coming Soon": [
      {
        title: "Mufasa",
        poster: "./images/Mufasa.png",
        genres: ["Adventure", "Family"],
        duration: "1h 58m",
        synopsis:
          "A prequel to The Lion King, exploring Mufasa's rise to become king of the Pride Lands.",
      },
      {
        title: "Better Man",
        poster: "./images/Better Man.png",
        genres: ["Biography", "Drama"],
        duration: "2h 10m",
        synopsis:
          "The story of Robbie Williams, exploring the highs and lows of his extraordinary career.",
      },
      {
        title: "Kraven",
        poster: "./images/Kraven.png",
        genres: ["Action", "Adventure"],
        duration: "1h 55m",
        synopsis:
          "A Marvel anti-hero embarks on a journey to become one of the most feared hunters in the world.",
      },
    ],
    "Now Showing": [
      {
        title: "The Wild Robot",
        poster: "./images/The Wild Robot.png",
        genres: ["Animation", "Adventure"],
        duration: "1h 30m",
        synopsis:
          "An abandoned robot learns to adapt and survive in the wilderness, befriending the animals around her.",
      },
      {
        title: "Spider-Man: No Way Home",
        poster: "./images/Spidey.png",
        genres: ["Action", "IMAX", "2 Trailers"],
        duration: "2h 13m",
        synopsis:
          "With Spider-Man’s identity now revealed, Peter Parker struggles to separate his normal life from the high stakes of being a superhero.",
      },
      {
        title: "Gladiator",
        poster: "./images/Gladiator II.png",
        genres: ["Action", "Drama"],
        duration: "2h 40m",
        synopsis:
          "A former Roman general seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      },
    ],
  };
  const filteredMovies = Object.keys(movies).reduce((result, section) => {
    result[section] = movies[section].filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    return result;
  }, {});

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Page */}
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />
          {/* Create Account Page */}
          <Route path="/create-account" element={<CreateAccount />} />
          {/* Home Page */}
          <Route
            path="/home"
            element={
              <>
                <Header onSearch={handleSearch} />
                {Object.entries(filteredMovies).map(([sectionTitle, sectionMovies]) => (
                  <MovieSection
                    key={sectionTitle}
                    title={sectionTitle}
                    movies={sectionMovies}
                  />
                ))}
                <Footer />
              </>
            }
          />
          {/* Select Movie Page */}
          <Route path="/select-movie" element={<SelectMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
