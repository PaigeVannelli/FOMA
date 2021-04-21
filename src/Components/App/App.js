import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
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
    // .then(info => console.log(info))
    .then(data => this.setState({ searchedArtIDs: data.objectIDs}))
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
