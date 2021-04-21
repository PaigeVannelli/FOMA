import './Search.css'
import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      error: ''
    }
  }

  handleChange = () => {
    // this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
        placeholder='Search here (ie. "monet" or "sunflowers")'
        type='text'
        name='searchTerm'
        value={this.state.searchTerm}
        // onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitSnack(event)}>Submit Snack</button>
      </form>
    )
  }
}

export default Search
// should be class compoentn that renders a form 
// store it's value and pass back up to app 