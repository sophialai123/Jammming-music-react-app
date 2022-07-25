import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {

  //to add this.props.track to the playlist.
  addTrack = () => {
    this.props.onAdd(this.props.track)
  }

  //to remove this.props.track from the playlist.
  removeTrack = () => {
    this.props.onRemove(this.props.track)

  }


  renderAction() {
    if (this.props.isRemoval) {
      return <button className='Track-action' onClick={this.removeTrack}>-</button>
    } else {
      return <button className='Track-action' onClick={this.addTrack}>+</button>
    }
  }


  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p> {track.artist} | {track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}



// <button className="Track-action" onClick={this.addTrack}>