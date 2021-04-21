import './ArtDetails.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'
import bookmark from '../../assets/bookmark.svg'

const ArtDetails = ({ currentArt }) => {

  return (
    <article className='art-details'>
      <nav className='button-nav'>
        <button className='favorite-button'>
          <img src={bookmark} className='button'/>
        </button>
        <div>
          <Link to='/'>
            <img src={home} className='home button'/>
          </Link>
          <Link to='/favorites'>
            <img src={favorites} className='favorites button'/>
          </Link>
        </div>
      </nav>
      <h1 className='title details'>Title: {currentArt.title}</h1>
      <p className='details'>Medium: {currentArt.medium}</p>
      <p className='details'>Artist: {currentArt.artist}</p>
      <p className='details'>Date: {currentArt.date}</p>
    </article>
  )
}

export default ArtDetails
