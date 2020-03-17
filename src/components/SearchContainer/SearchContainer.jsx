import React from 'react';
import classes from './SearchContainer.module.scss';
import SearchBar from './SearchBar/SearchBar';

const SearchContainer = props => {
  return (
    <div className={classes.SearchContainer}>
      <h2>Search your city</h2>
      <div className={classes.input}>
        <SearchBar setGeoLocation={props.handleGeoLocation} />
      </div>
    </div>
  );
};

export default SearchContainer;
