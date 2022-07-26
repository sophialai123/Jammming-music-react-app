
//create a Spotify module  to get a user’s access 
//token so that they can make requests to the Spotify API.
let accessToken;

const CLIENT_ID = '1cf66b4902754fc2ab72e37351f647bf';
const REDIRECT_URI = 'http://localhost:3000/';

const Spotify = {

  getAccessToken() {
    //Check if the user’s access token is already set.
    if (accessToken) {
      return accessToken;
    }
    /* If the access token is not already set, 
    check the URL to see if it has just been obtained. */
    const accessInMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.history.href.match(/expires_in=([^&]*)/);

    //If the access token and expiration time are in the URL
    if (accessInMatch && expiresInMatch) {

      accessToken = accessInMatch[1];
      const expiresIn = Number(expiresInMatch[1])
      //Clear the access token and URL parameters
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

    } else {
      // if the access token variable is empty and is not in the URL.
      window.location(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`)
    }
  },

  //accepts a search term input
  search(term) {

    const accessToken = Spotify.getAccessToken()
    // add Authorization header
    fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonResponse) => {
        if (!jsonResponse.track) {
          return []
        }
        return jsonResponse.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            url: track.uri
          }
        })
      })
      .catch((error) => { console.log(error) })

  }

}


export default Spotify;