import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'
import search from '../../assets/search.svg'

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

export default Nav
