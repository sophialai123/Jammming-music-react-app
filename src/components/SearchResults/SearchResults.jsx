import React from 'react';
import TrackList from '../Track/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        { /* Pass the search results from the SearchResults 
      component to the TrackList component.*/}
        <TrackList
          tracks={this.props.searchResults}
        />
      </div>
    )
  }
}

export default SearchResults;