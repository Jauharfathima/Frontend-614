import React, { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import "./Header.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Update the search dynamically as the user types
  };

  const handleSearchClick = () => {
    onSearch(query); // Trigger search when the icon is clicked
  };

  return (
    <header className="header">
      <div className="logo">ACMEPLEX</div>
      <div className="search-container">
        <img
          src={searchIcon}
          alt="Search"
          className="search-icon"
          onClick={handleSearchClick} // Add click functionality
        />
        <input
          type="text"
          className="search-bar"
          placeholder="Search Movie"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <img src={profileIcon} alt="Profile" className="profile-icon" />
    </header>
  );
}

export default Header;
