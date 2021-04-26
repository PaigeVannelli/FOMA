import './ArtDetails.css'
import activeBookmark from '../../assets/bookmark.svg'
import bookmark from '../../assets/bookmark-outline.svg'
import PropTypes from 'prop-types'

const ArtDetails = (props) => {
  
  const submitFavorite = () => {
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

  const checkData = (data) => {
    return props.currentArt[data] ? props.currentArt[data] : 'unknown'
  }
  
  return (
    <article className='art-details'>
      <div className='art-plaque'>
        <button 
          data-cy='favorite-button' 
          className='favorite-button' 
          onClick={submitFavorite}
        >
          <img 
            data-cy='favorite-button-image'
            src={props.currentArt.isFavorited ? activeBookmark : bookmark} 
            className='button' 
            alt='active-bookmark'
          /> 
        </button>
        <h1 data-cy='art-title'className='title details'>Title: {checkData('title')}</h1>
        <p className='details'>Medium: {checkData('medium')}</p>
        <p data-cy='art-artist' className='details'>Artist: {checkData('artist')}</p>
        <p className='details'>Date: {checkData('date')}</p>
      </div>
    </article>
  )
}

ArtDetails.propTypes = {
  currentArt: PropTypes.object,
  addFavorite: PropTypes.func, 
}

export default ArtDetails
