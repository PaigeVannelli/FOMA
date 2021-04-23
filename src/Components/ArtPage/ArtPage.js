import './ArtPage.css'
import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'
import fetchArtInfo from '../../ApiCalls'

class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArt: {},
      isFavorited: false,
      error: ''
    }
  }

  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.currentArt !== this.state.currentArt) {
  //     this.setState({ currentArt: this.props.currentArt})
  //   }
  // }

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

  componentDidUpdate = (prevProps) => {
  //   // need to stop it from running when first loading 
  //   // should add a conditional to refetch when someone lands on the page 
  //   // if (prevProps.currentArtID !== this.props.currentArtID) {
  //   // try {
  //   //   const response = await fetchArtInfo('objects/', this.props.currentArtID)
  //   //   this.setState({ searchedArtIDs: response.objectIDs })
  //   //   this.setState({ currentArtID: this.state.searchedArtIDs[0] })
  //   // } catch(error) {
  //   //   this.setState({ error: error.message })
  //   // }
    if (prevProps.currentArtID !== this.props.currentArtID) {
      fetchArtInfo('objects/', this.props.currentArtID)
        .then(artObject => this.simplifyArtObject(artObject))
        .then(data => this.setState({ currentArt: data }))
        .catch(() => this.setState({ error: "Something went wrong, please try again later" }))
      }
    }

  render = () => {
    return (
      <section className='art-page'>
        {
          this.state.currentArt.title ?
        <>
          <div className='art-piece-container'>
            <img src={this.state.currentArt.image} alt={this.state.currentArt.title} className='art-piece'/>
          </div>
          <div className='display-next-button-container'>
            <button className='display-next-button' onClick={this.props.displayNextPiece}>></button>
          </div>
          <ArtDetails currentArt={this.state.currentArt} addFavorite={this.props.addFavorite}/>
        </>
        :
        <h1>loading</h1>
        }
        {/* <ArtImage /> do I need this? */}
      </section>
    )
  }
}

export default ArtPage
