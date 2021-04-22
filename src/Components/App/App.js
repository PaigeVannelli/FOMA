import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage'
import ArtPage from '../artPage/ArtPage'

//Change app to name! 
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
      currentArtID: 0,
      currentArtIndex: 0,
      currentArt: {},
      favoritedArt: [],
      // searchTerm: '',
      //term is passed up from search then fetch call is run
      //passed down to ArtDetails 
      error: ''
    }
  }
  
  search = (searchTerm) => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm.searchTerm}`)
    .then(response => response.json())
    .then(data => this.randomizeArtIDs(data.objectIDs))
    .then(() => this.setState({ currentArtID: this.state.searchedArtIDs[0] }))
  }
  
  randomizeArtIDs = (searchedArtArray) => {
    for (var i = searchedArtArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = searchedArtArray[i];
      searchedArtArray[i] = searchedArtArray[j];
      searchedArtArray[j] = temp;
    }
    this.setState({ searchedArtIDs: searchedArtArray, currentArtID: this.state.searchedArtIDs[0] })
  }
  
  displayNextPiece = () => {
    // console.log(this.state.currentArtIndex, this.state.searchedArtIDs.length)
    if (this.state.currentArtIndex < this.state.searchedArtIDs.length) {
      let index = this.state.currentArtIndex + 1
      this.setState({ currentArtIndex: index}, () => console.log('nice'))
      this.setState({ currentArtID: this.state.searchedArtIDs[index] })
    }
  }

  render = () => {
    return (
      <main className='main'>
        <BrowserRouter>
          <Switch>
            {/* {this.state.searchedArtIDs.length > 0 && <Redirect to={`/${this.state.currentArtId}`} />} */}
            <Route 
            exact path='/'
            render={() => {
              return <LandingPage search={this.search}/>
            }}/>
            <Route 
            exact path={'/gallery'}
            render={() => {
              return (
                this.currentArtID === 0 ? <Redirect to='/'/> : 
              <ArtPage currentArtID={this.state.currentArtID} displayNextPiece={this.displayNextPiece}/>
              )
            }}
            />
            {/* <Route exact path="/gallery">
              {
              !this.state.currentArt.title ? 
              <Redirect to='/'/> 
              : 
              <ArtPage currentArtID={this.state.currentArtID} displayNextPiece={this.displayNextPiece}/>
              }
            </Route> */}
            {/* <AllFavorites /> */}
            {/* URL error handling! have an error component */}
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
