import React from 'react'
import TrackList from '../Track/TrackList';
import './PlayList.css';

export default class Playlist extends React.Component {

  handleNameChange = (event) => {
    this.props.onNameChange(event.target.value)

  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" onChange={this.handleNameChange} />
        { /* pass this.props.playlistTracks as an attribute called tracks in the TrackList component.*/}
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true} />
        <button className="Playlist-save"
          onClick={this.props.onSave}
        >SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
