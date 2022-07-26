import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';
import Playlist from './components/PlayList/Playlist';
import React from 'react';
import Spotify from './util/Spotify';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    }

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }


  // search(term) {
  //   

  //   Spotify.search(term).then(searchResults => {
  //     //Update the state of searchResults with the value 
  //     //resolved from Spotify.search()‘s promise.
  //     this.setState({ searchResults: searchResults })
  //     console.log(" search for ");

  //   });

  // }


  //update to Spotify.search() method, is a promise
  search(term) {

    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults });
    });
  }

  //adds a song to the playlist state
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    //to check if the track already exists in the playlist
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    //if id is new, add the song to the end 
    tracks.push(track);
    //update the state
    this.setState({ playlistTracks: tracks });
  }

  //no need to bind use Arrow function
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id)
    this.setState({ playlistTracks: tracks })
  }

  //allows a user to change the name of their playlist
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })

  }

  //save the user’s playlist to their account.
  // savePlaylist() {
  //   let trackURIs = this.state.playlistTracks.map(track => track.uri);

  //   Spotify.savePlaylist(this.state.playlistName, trackURIs)
  //     .then(() => {
  //       this.setState({
  //         playlistName: "New Playlist",
  //         playlistTracks: []
  //       });
  //     });

  // }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* Pass the state of the App component’s searchResults */}
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            {/* Add App state attributes and call methods */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default App;


/* 
{
  id: 1,
    name: "name1",
      artist: "artist1",
        album: "album1"
},
{
  id: 2,
    name: "name2",
      artist: "artist2",
        album: "album2"
},
{
  id: 3,
    name: "name3",
      artist: "artist3",
        album: "album3"
},
{
  id: 4,
    name: "playlistname1",
      artist: "playlistartist1",
        album: "playlistalbum1"
},
{
  id: 5,
    name: "playlistname2",
      artist: "playlistartist2",
        album: "playlistalbum2"
},
{
  id: 6,
    name: "playlistname3",
      artist: "playlistartist3",
        album: "playlistalbum3"
} */