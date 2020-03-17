import React from 'react';
import classes from './SearchContainer.module.scss';
import SearchBar from './SearchBar/SearchBar';

const SearchContainer = props => {
  return (
    <div className={classes.SearchContainer}>
      <h1>Search your city</h1>
      <div className={classes.input}>
        <SearchBar setGeoLocation={props.handleGeoLocation} />
      </div>
    </div>
  );
};

export default SearchContainer;
