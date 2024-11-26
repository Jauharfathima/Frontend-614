import React, { useRef } from "react";
import searchIcon from "../assets/search-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import "./Header.css";

function Header({ onSearch }) {
  const searchInputRef = useRef(null);

  const handleIconClick = () => {
    const query = searchInputRef.current.value;
    onSearch(query);
  };

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="logo">ACMEPLEX</div>
      <div className="search-container">
        <input
          ref={searchInputRef}
          type="text"
          className="search-bar"
          placeholder="Search Movie"
          onChange={handleInputChange}
        />
        <img
          src={searchIcon}
          alt="Search"
          className="search-icon"
          onClick={handleIconClick}
        />
      </div>
      <img src={profileIcon} alt="Profile" className="profile-icon" />
    </header>
  );
}

export default Header;
