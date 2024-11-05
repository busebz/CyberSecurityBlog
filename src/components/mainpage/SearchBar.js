import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  
  return (
    <form className={classes.searchbar}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search..."   
      />
      <a href='/' >Search</a>
    </form>
  );
};

export default SearchBar;
