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

  componentDidMount = () => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.currentArtID}`)
      .then(response => response.json())
      .then(artObject => this.simplifyArtObject(artObject))
      .then(data => this.setState({ currentArt: data }))
  }

  render = () => {
    return (
      <section>
        {/* <ArtImage /> do I need this? */}
        <img src={this.state.currentArt.primaryImage} />
        {/* <ArtDetails /> */}
        <h1>Test</h1>
      </section>
    )
  }
}

export default ArtPage
// Should store state of current piece
// will be given an id to fetch  
// render both art details and art image 