import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';

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
          <TextField
            id='outlined-basic'
            label='City'
            variant='outlined'
            style={{ width: '100%' }}
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input'
            })}
          />
          <div
            className='autocomplete-dropdown-container'
            style={
              suggestions.length === 0
                ? null
                : { border: '1px solid black', backgroundColor: 'white' }
            }>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? {
                    backgroundColor: 'lightBlue',
                    cursor: 'pointer',
                    padding: '10px'
                  }
                : {
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    padding: '10px'
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
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
