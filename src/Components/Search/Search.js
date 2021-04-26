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

  searchForInput = () => {
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

  validateSearch = () => {
    return this.state.searchTerm ? (() => this.searchForInput()) : ((event) => event.preventDefault()) 
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
          to="/gallery"
        >
          <button className='submit-button'onClick={this.validateSearch()}>
            <p className={`submit-text ${this.state.searchTerm && 'submit-text-active'}`}>ENTER THE MUSEUM</p>
          </button>
        </Link>
      </form>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func
}

export default Search
