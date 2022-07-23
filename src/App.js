import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';
import Playlist from './components/PlayList/Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* Add a SearchBar component */}
        <SearchBar />
        <div className="App-playlist">
          {/* Add a SearchResultscomponent */}
          <SearchResults />
          {/* Add a Playlist component */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
