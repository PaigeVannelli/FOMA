import './Nav.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'

const Nav = () => {
  return (
    <nav className='button-nav'>
      <div>
        <Link to='/'>
          <img src={home} className='home button'/>
        </Link>
        <Link to='/favorites'>
          <img src={favorites} className='favorites button'/>
        </Link>
      </div>
    </nav>
  ) 
}

export default Nav
