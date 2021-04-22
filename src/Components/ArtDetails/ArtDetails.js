import './ArtDetails.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'
import bookmark from '../../assets/bookmark.svg'

const ArtDetails = (props) => {
  
  const submitFavorite = () => {
    const favoritePost = {
      id: props.currentArt.id,
      title: props.currentArt.title,
      image: props.currentArt.image,
      artist: props.currentArt.artist,
      key: props.currentArt.id
    }
    props.addFavorite(favoritePost)
    //change logo src
  }
  
  return (
    <article className='art-details'>
      <nav className='button-nav'>
        <button className='favorite-button' onClick={submitFavorite}>
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
      <h1 className='title details'>Title: {props.currentArt.title}</h1>
      <p className='details'>Medium: {props.currentArt.medium}</p>
      <p className='details'>Artist: {props.currentArt.artist}</p>
      <p className='details'>Date: {props.currentArt.date}</p>
    </article>
  )
}

export default ArtDetails
