import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'
import search from '../../assets/search.svg'
import PropTypes from 'prop-types'

const Nav = () => {
  return (
    <nav className='button-nav'>
      <Link to='/'>
        <img src={home} className='home button' alt='home-button'/>
      </Link>
      {
        useLocation().pathname === '/favorites' ?
        <Link to='/gallery'>
          <img src={search} className='favorites button' alt='search-button'/>
        </Link>
        :
        <Link to='/favorites'>
          <img src={favorites} className='favorites button' alt='favorites-button'/>
        </Link>
      }
    </nav>
  ) 
}

Nav.propTypes = {
  submitFavorite: PropTypes.func
}

export default Nav
