import './ArtPage.css'
import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'

class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArt: {},
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

  // componentDidMount = () => {
  //   if (this.props.currentArtID !== 0) {
  //   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.currentArtID}`)
  //     .then(response => response.json())
  //     .then(artObject => this.simplifyArtObject(artObject))
  //     .then(data => this.setState({ currentArt: data }))
  //   }
  // }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentArtID !== this.props.currentArtID) {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.currentArtID}`)
      .then(response => response.json())
      .then(artObject => this.simplifyArtObject(artObject))
      .then(data => this.setState({ currentArt: data }))
    }
  }



  render = () => {
    return (
      <section className='art-page'>
        {
          this.state.currentArt.title ?
        <>
          <div className='art-piece-container'>
            <button onClick={this.props.displayNextPiece}>></button>
            <img src={this.state.currentArt.image} alt={this.state.currentArt.title} className='art-piece'/>
          </div>
          <ArtDetails currentArt={this.state.currentArt}/>
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
// Should store state of current piece
// will be given an id to fetch  
// render both art details and art image 