import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import axios from 'axios';

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
    axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${this.state.searchTerm}`)
      .then(response => response.data)
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
      const { tracks } = this.state;
      console.log(tracks);
      
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
