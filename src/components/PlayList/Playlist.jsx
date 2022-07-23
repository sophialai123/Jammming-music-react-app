import React from 'react'
import './PlayList.css';

export default class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        { /* <!-- Add a TrackList component --> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
