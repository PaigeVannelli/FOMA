import React, { Component } from 'react'
import './FOMA.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage'
import ArtPage from '../artPage/ArtPage'
import AllFavorites from '../allFavorites/AllFavorites'
import fetchArtInfo from '../../ApiCalls'
import Nav from '../nav/Nav'
import logo from '../../assets/logo.png';

class FOMA extends Component {
  constructor() {
    super();
    this.state = {
      searchedArtIDs: [],
      favoritedArt: [],
      currentArtIndex: 0,
      currentArt: {
        isFavorited: false,
        lastPiece: false,
      },
      loading: true,
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
    cleanedArtObject.isFavorited = false
    return cleanedArtObject
  }

  checkLastPiece = () => {
    if ((this.state.currentArtIndex + 1) === this.state.searchedArtIDs.length) {
      this.setState(prevState => ({
        currentArt: {                 
            ...prevState.currentArt,    
            lastPiece: true      
        }
      }))
    } else {
      this.setState(prevState => ({
        // currentArt: {                 
        //     ...prevState.currentArt,    
        //     lastPiece: false     
        // }
      }))
    }
  }

  // checkIfFavorited = (artPiece) => {
  //   this.state.favoritedArt.forEach(piece => {
  //     if (piece.title === artPiece.title) {
  //       this.setState(prevState => ({
  //         currentArt: {                 
  //             ...prevState.currentArt,    
  //             isFavorited: true      
  //         }
  //       }))
  //     } else {
  //       this.setState(prevState => ({
  //         currentArt: {                 
  //             ...prevState.currentArt,    
  //             isFavorited: false     
  //         }
  //       }))
  //     }
  //   })
  // }

  fetchPieceDetails = (currentID) => {
    fetchArtInfo('objects/', currentID)
      .then(data => {
        const artObject = this.simplifyArtObject(data)
        this.setState({ currentArt: artObject, loading: false })
        this.checkLastPiece()
      })
      .catch(() => this.setState({ error: "Something went wrong, please try again later", loading: false, currentArt: {} }))
  }

  search = (searchTerm) => {
    this.setState({loading: true, error: '' })
    fetchArtInfo('search?q=', searchTerm.searchTerm)
    .then(allArt => {
      this.setState({ searchedArtIDs: allArt?.objectIDs })
      if (allArt.objectIDs) {
        this.fetchPieceDetails(this.state.searchedArtIDs[0])
      } else {
        this.setState({ error: 'Search term not found, please try again', loading: false, currentArt: {} })
      }
    })
    .catch(error => {
      console.log(error)
        this.setState({ error: 'Something went wrong, please try again', loading: false, currentArt: {} })
      })
    }

  //Randomize function removed for testing 
  // search = (searchTerm) => {
  //   this.setState({loading: true})
  //   fetchArtInfo('search?q=', searchTerm.searchTerm)
  //     .then(allArt => this.randomizeArtIDs(allArt.objectIDs))
  //     .catch(() => this.setState({ error: 'Please try again later' }))
  //     .then(() => this.fetchPieceDetails(this.state.searchedArtIDs[0]))
  //   }
  
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
    this.setState(prevState => ({
      currentArtIndex: 0,
      currentArt: {                 
          ...prevState.currentArt,    
          lastPiece: false   
      }
    }))
  }

  // checkForErrors = () => {
  //   if (this.state.error) {
  //     return <h1 className='error'>{this.state.error}</h1>
  //   }
  // }

  render = () => {
    return (
      <main className='main'>
        <BrowserRouter>
        <Nav resetSearch={this.resetSearch}/>
          <Switch>
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
                  currentArt={this.state.currentArt} 
                  displayNextPiece={this.displayNextPiece} 
                  addFavorite={this.addFavorite}
                  resetSearch={this.resetSearch}
                  error={this.state.error}
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

export default FOMA;