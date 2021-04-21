import './ArtPage.css'
import React, { Component } from 'react'

class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArt: {},
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.currentArtID}`)
      .then(response => response.json())
      .then(data => this.setState({ currentArt: data }))
  }

  render = () => {
    return (
      <article>
        <h1>Test</h1>
        <img src={this.state.currentArt.primaryImage} />
      </article>
    )
  }
}

export default ArtPage
// Should store state of current piece
// will be given an id to fetch  
// render both art details and art image 