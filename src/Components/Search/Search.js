import './Search.css'
import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  searchForInput = event => {
    event.preventDefault()
    const searchTerm = {
      id: Date.now(),
      ...this.state,
    }
    this.props.search(searchTerm)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ searchTerm: '' })
  }

  render() {
    return (
      <form>
        <input
        placeholder='Search here (ie. "monet" or "sunflowers")'
        type='text'
        name='searchTerm'
        value={this.state.searchTerm}
        onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.searchForInput(event)}>Search</button>
      </form>
    )
  }
}

export default Search
// should be class compoentn that renders a form 
// store it's value and pass back up to app 