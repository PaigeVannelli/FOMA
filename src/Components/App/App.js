import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
      currentArtID: 0,
      currentArt: {},
      favoritedArt: [],
      // searchTerm: '',
      //term is passed up from search then fetch call is run
      //passed down to ArtDetails 
      error: ''
    }
  }

  // componentDidMount = () => {

  // }

  search = (searchTerm) => {
    // this.setState({ searchTerm: searchTerm})
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm.searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({ searchedArtIDs: data.objectIDs}))
    .then(() => this.randomizeArtIDs())
  }

  randomizeArtIDs = () => {
    let searchedArtArray = this.state.searchedArtIDs
    for (var i = searchedArtArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = searchedArtArray[i];
        searchedArtArray[i] = searchedArtArray[j];
        searchedArtArray[j] = temp;
    }
    this.setState({ searchedArtIDs: searchedArtArray, currentArtID: this.state.searchedArtIDs[0] })
  }


  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route 
            exact path='/'
            render={() => {
              return <LandingPage search={this.search}/>
            }}/>
            {/* <ArtPage />
            <AllFavorites /> */}
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
