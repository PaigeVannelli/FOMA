import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
      currentArt: {},
      favoritedArt: [],
      //term is passed up from search then fetch call is run
      //passed down to ArtDetails 
      error: ''
    }
  }

  render() {
    return (
      <main>
        <Route 
        exact path='/'
        render={() => {
          return <LandingPage />
        }}/>
        {/* <ArtPage />
        <AllFavorites /> */}
      </main>
    )
  }
}

export default App;
