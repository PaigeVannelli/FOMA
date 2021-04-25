import './Search.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import search from '../../assets/search.svg'
import PropTypes from 'prop-types'

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
    // event.preventDefault()
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
      <form className='search'>
        <input
        data-cy='search-input'
        className='search-input'
        placeholder='search term here'
        type='text'
        name='searchTerm'
        value={this.state.searchTerm}
        onChange={event => this.handleChange(event)}
        />
        <Link 
          data-cy='search-button' 
          className='submit-button' 
          // onClick={event => this.searchForInput(event)} 
          to="/gallery"
          onClick={this.state.searchTerm ? (event => this.searchForInput(event)) : ((event) => event.preventDefault()) }
        >
          {/* <img src={search} className='search-image' alt='search-button'/> */}
          <p className={`submit-button ${this.state.searchTerm && 'submit-button-active'}`}>ENTER</p>
        </Link>
      </form>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func
}

export default Search
// should be class compoentn that renders a form 
// store it's value and pass back up to app 