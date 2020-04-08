import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
import './components/custom-button/custom-button.styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      searchTerm: '',
      callApi: false
    };
  }

  componentDidUpdate() {
    const proxy = 'https://crossorigin.me/';
    fetch(`${proxy}https://itunes.apple.com/search?term=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(users => this.setState({ tracks: users.results })
    );
  }

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state.searchTerm);
  };

  onClickHandler = () => {
    this.setState({ callApi: !this.state.callApi}); 
  }

  render() {
    console.log(this.state.callApi)
    if(this.state.callApi){
      const { tracks, searchTerm } = this.state;
      console.log(tracks);
      const filteredtracks = tracks.filter(track =>
        track.artistName.includes(searchTerm.toLowerCase())
      );
      return (
        <div className='App'>
          <h1>Itunes Tracks</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <button className='search-button custom-button' onClick={this.onClickHandler}>Search</button>
          <CardList tracks={tracks} />

        </div>
      );
    }else{
      return (
        <div className='App'>
          <h1>Itunes Tracks</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <button className='search-button custom-button' onClick={this.onClickHandler}>Search</button>
        </div>
      );
    }
    
  }
}

export default App;
