import React from "react";
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  search = () => {
    //pass the term from app component
    this.props.onSearch(this.state.term)
    console.log("search ")

  }

  handleTermChange = (event) => {
    //update the state term
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <div className="SearchBar" >
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;