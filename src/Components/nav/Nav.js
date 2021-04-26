import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import home from '../../assets/home.svg'
import bookmark from '../../assets/bookmark.svg'
import search from '../../assets/search.svg'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'

const Nav = ({ resetSearch }) => {
  return (
    <nav className='header'>
      <img className='logo' src={logo} />
      <div className='button-nav'>
        <Link className='link' to='/' onClick={resetSearch}>
          <img 
            src={home} 
            // className='home button' 
            className={`button ${useLocation().pathname === '/' && 'home-highlighted'}`}
            alt='home-button'
          />
        </Link>
        <Link className='link' to='/gallery'>
          <img 
            data-cy='search-button' 
            src={search} 
            className={`button ${useLocation().pathname === '/gallery' && 'search-highlighted'}`}
            alt='search-button'
          />
        </Link>
        <Link className='link' to='/favorites'>
          <img 
            data-cy='view-favorites' 
            src={bookmark} 
            className={`button ${useLocation().pathname === '/favorites' && 'favorites-highlighted'}`}
            alt='favorites-button'
          />
        </Link>
      </div>
    </nav>
  ) 
}

Nav.propTypes = {
  resetSearch: PropTypes.func
}

export default Nav
