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
      loading: true,
      currentArtIndex: 0,
      currentArt: {
        isFavorited: false,
      },
      lastPiece: false,
      favoritedArt: [],
      // isFavorited: false,
      error: ''
      // searchedArtIDs: [],
      // loading: true,
      // lastPiece: false,
      // //If I'm going based off index should I get rid of artId?
      // currentArtIndex: 0,
      // currentArt: {},
      // favoritedArt: [],
      // isFavorited: false,
      // error: ''
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
    cleanedArtObject.isFavorited = false
    return cleanedArtObject
  }

  checkLastPiece = () => {
    if ((this.state.currentArtIndex + 2) === this.state.searchedArtIDs.length) {
      this.setState({ lastPiece: true })
    } else {
      this.setState({ lastPiece: false })
    }
  }

  checkIfFavorited = (artPiece) => {
    this.state.favoritedArt.forEach(piece => {
      if (piece.title === artPiece.title) {
        this.setState(prevState => ({
          currentArt: {                 
              ...prevState.currentArt,    
              isFavorited: true      
          }
        }))
      }
    })
  }

  fetchPieceDetails = (currentID) => {
    this.checkLastPiece()
    fetchArtInfo('objects/', currentID)
      .then(data => {
        const artObject = this.simplifyArtObject(data)
        this.setState({ currentArt: artObject, loading: false })
        this.checkIfFavorited(data)
      })
      .catch(() => this.setState({ error: "Something went wrong, please try again later" }))
  }

  search = (searchTerm) => {
    this.setState({loading: true})
    fetchArtInfo('search?q=', searchTerm.searchTerm)
      .then(allArt => this.randomizeArtIDs(allArt.objectIDs))
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
    this.setState({ searchedArtIDs: searchedArtArray })
  }
  
  displayNextPiece = () => {
    if (this.state.currentArtIndex + 1 < this.state.searchedArtIDs.length) {
      this.setState({loading: true})
      let index = this.state.currentArtIndex + 1
      this.setState({ currentArtIndex: index}, () => console.log(''))
      this.fetchPieceDetails(this.state.searchedArtIDs[index])
    } 
  }

  addFavorite = (favorite) => {
    if (!this.state.favoritedArt.includes(favorite)) {
      let tempFavoritedArt = this.state.favoritedArt
      tempFavoritedArt.push(favorite)
      this.setState({ favoritedArt: tempFavoritedArt })
      this.setState(prevState => ({
        currentArt: {                  
            ...prevState.currentArt,    
            isFavorited: true       
        }
      }))
    }
  }


  resetSearch = () => {
    this.setState({ currentArtIndex: 0, lastPiece: false })
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
                  currentArt={this.state.currentArt} 
                  displayNextPiece={this.displayNextPiece} 
                  addFavorite={this.addFavorite}
                  lastPiece={this.state.lastPiece}
                  resetSearch={this.resetSearch}
                />
              )
            }}
            />
            <Route 
            exact path={'/favorites'}
            render={() => {
              return (
                <AllFavorites favoritedArt={this.state.favoritedArt} resetSearch={this.resetSearch}/>
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
