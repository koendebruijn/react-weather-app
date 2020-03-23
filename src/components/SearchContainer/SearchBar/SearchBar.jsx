import React, { useState } from 'react';
import classes from './SearchBar.module.scss';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

const SearchBar = props => {
  const [address, setAddress] = useState('');

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    setAddress(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => props.setGeoLocation(latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search your location',
              className: `location-search-input ${
                suggestions.length === 0 ? classes.Input : classes.InputActive
              }`
            })}
          />
          <div
            className={`autocomplete-dropdown-container ${
              suggestions.length === 0 ? null : classes.Suggestions
            }`}>
            {loading && (
              <div>
                <p>Loading...</p>
              </div>
            )}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? `suggestion-item--active ${classes.SuggestionItemActive}`
                : `suggestion-item ${classes.SuggestionItem}`;

              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className
                  })}>
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default SearchBar;
