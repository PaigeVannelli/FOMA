import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage'
import ArtPage from '../artPage/ArtPage'
import AllFavorites from '../allFavorites/AllFavorites'
import fetchArtInfo from '../../ApiCalls'

//Change app to name! 
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
      currentArtID: 0,
      loading: true,
      //If I'm going based off index should I get rid of artId?
      currentArtIndex: 0,
      currentArt: {},
      favoritedArt: [],
      isFavorited: false,
      error: ''
    }
  }
  
  simplifyArtObject = (artObject) => {
    let cleanedArtObject = {}
    cleanedArtObject.id = artObject.objectID
    cleanedArtObject.title = artObject.title
    cleanedArtObject.artist = artObject.artistDisplayName
    cleanedArtObject.medium = artObject.medium
    cleanedArtObject.date = artObject.objectDate
    cleanedArtObject.image = artObject.primaryImage
    cleanedArtObject.smallImage = artObject.primarySmallImage
    return cleanedArtObject
  }

  fetchPieceDetails = (currentID) => {
    fetchArtInfo('objects/', currentID)
      .then(artObject => this.simplifyArtObject(artObject))
      .then(data => this.setState({ currentArt: data, loading: false, isFavorited: false }))
      .catch(() => this.setState({ error: "Something went wrong, please try again later" }))
  }

  search = (searchTerm) => {
    this.setState({loading: true})
    fetchArtInfo('search?q=', searchTerm.searchTerm)
      .then(allArt => this.randomizeArtIDs(allArt.objectIDs))
      .then(() => this.setState({ currentArtID: this.state.searchedArtIDs[0] }))
      .catch(() => this.setState({ error: 'Please try again later' }))
      .then(() => this.fetchPieceDetails(this.state.searchedArtIDs[0]))
    }
  
  // search = async (searchTerm) => {
  //   try {
  //     const response = await fetchArtInfo('search?q=', searchTerm.searchTerm)
  //     this.setState({ searchedArtIDs: response.objectIDs })
  //     this.setState({ currentArtID: this.state.searchedArtIDs[0] })
  //   } catch(error) {
  //     this.setState({ error: error.message })
  //   }
  // }
  
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
    if (this.state.currentArtIndex < this.state.searchedArtIDs.length) {
      this.setState({loading: true})
      let index = this.state.currentArtIndex + 1
      this.setState({ currentArtIndex: index}, () => console.log('nice'))
      this.setState({ currentArtID: this.state.searchedArtIDs[index] }, () => console.log('it worked'))
      this.fetchPieceDetails(this.state.searchedArtIDs[index])
    }
  }

  addFavorite = (favorite) => {
    if (!this.state.favoritedArt.includes(favorite)) {
      let tempFavoritedArt = this.state.favoritedArt
      tempFavoritedArt.push(favorite)
      this.setState({ favoritedArt: tempFavoritedArt, isFavorited: true })
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
                <ArtPage 
                  loading={this.state.loading}
                  validSearch={this.state.searchedArtIDs.length > 0}
                  currentArtID={this.state.currentArtID} 
                  currentArt={this.state.currentArt} 
                  displayNextPiece={this.displayNextPiece} 
                  addFavorite={this.addFavorite}
                  isFavorited={this.state.isFavorited}
                />
              )
            }}
            />
            <Route 
            exact path={'/favorites'}
            render={() => {
              return (
                <AllFavorites favoritedArt={this.state.favoritedArt}/>
              )
            }}
            />
            <Route 
            render={() => <Redirect to="/" />} 
            />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
