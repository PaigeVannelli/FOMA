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

  render = () => {
    return (
      <h1>Test</h1>
    )
  }
}

export default ArtPage
// Should store state of current piece
// will be given an id to fetch  
// render both art details and art image 