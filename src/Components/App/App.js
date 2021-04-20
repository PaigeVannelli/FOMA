import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedIDs: [],
      //term is passed up from search then fetch call is run
      //passed down to ArtDetails 
      error: ''
    }
  }

  render() {
    return (
      <h1>TEST</h1>
    )
  }
}

export default App;
