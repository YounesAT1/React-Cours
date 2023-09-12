import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search Facebook" />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchInput;
