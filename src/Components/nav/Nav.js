import './Nav.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'

const Nav = () => {
  return (
    <nav className='button-nav'>
      <Link to='/'>
        <img src={home} className='home button'/>
      </Link>
      <Link to='/favorites'>
        <img src={favorites} className='favorites button'/>
      </Link>
    </nav>
  ) 
}

export default Nav
