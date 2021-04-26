import './ArtDetails.css'
// import { Link } from 'react-router-dom'
// import home from '../../assets/home.svg'
// import favorites from '../../assets/heart.svg'
import activeBookmark from '../../assets/bookmark.svg'
import bookmark from '../../assets/bookmark-outline.svg'
import Nav from '../nav/Nav'
import PropTypes from 'prop-types'

const ArtDetails = (props) => {
  
  const submitFavorite = () => {
    // if (!props.currentArt.isFavorited) {
    if (!props.currentArt.isFavorited) {
      const favoritePost = {
        id: props.currentArt.id,
        title: props.currentArt.title,
        image: props.currentArt.image,
        artist: props.currentArt.artist,
        key: props.currentArt.id,
      }
      props.addFavorite(favoritePost)
    }
  }
  
  return (
    <article className='art-details'>
      <div className='art-display-nav'>
        {/* <button 
          data-cy='favorite-button' 
          className='favorite-button' 
          onClick={submitFavorite}
        >
          {props.currentArt.isFavorited && 
            <img 
              data-cy='favorite-button-image'
              src={activeBookmark} 
              className='button' 
              alt='active-bookmark'
            /> }
          {!props.currentArt.isFavorited && 
            <img 
              data-cy='favorite-button-image'
              src={bookmark} 
              className='button'
              alt='bookmark'
            /> }
        </button> */}
        {/* <Nav resetSearch={props.resetSearch} /> */}
      </div>
      <div className='art-plaque'>
        <button 
          data-cy='favorite-button' 
          className='favorite-button' 
          onClick={submitFavorite}
        >
          {props.currentArt.isFavorited && 
            <img 
              data-cy='favorite-button-image'
              src={activeBookmark} 
              className='button' 
              alt='active-bookmark'
            /> }
          {!props.currentArt.isFavorited && 
            <img 
              data-cy='favorite-button-image'
              src={bookmark} 
              className='button'
              alt='bookmark'
            /> }
        </button>
        <h1 data-cy='art-title'className='title details'>Title: {props.currentArt.title ? props.currentArt.title : 'unknown'}</h1>
        <p className='details'>Medium: {props.currentArt.medium ? props.currentArt.medium : 'unknown'}</p>
        <p data-cy='art-artist' className='details'>Artist: {props.currentArt.artist ? props.currentArt.artist : 'unknown'}</p>
        <p className='details'>Date: {props.currentArt.date ? props.currentArt.date : 'unknown'}</p>
      </div>
    </article>
  )
}

ArtDetails.propTypes = {
  currentArt: PropTypes.object,
  addFavorite: PropTypes.func, 
  // isFavorited: PropTypes.bool
}

export default ArtDetails
