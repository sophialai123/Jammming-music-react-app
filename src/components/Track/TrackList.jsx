import React, { Component } from 'react';
import './Track.css';
import Track from './Track';

export default class TrackList extends Component {
  render() {
    return (
      <div className="TrackList" >
        {/* <!-- You will add a map method that renders a set of Track components  --> */}

        {
          this.props.tracks.map((track) => {
            return <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            /> // pass this.props.onAdd as an attribute 
          })
        }

        { }
      </div>
    )
  }
}
