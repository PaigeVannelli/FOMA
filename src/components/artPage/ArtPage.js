import './ArtPage.css'
import ArtDetails from '../artDetails/ArtDetails'
import PropTypes from 'prop-types'
import nextArrow from '../../assets/next.png'

const ArtPage = (props) => {
  
  const displayPiece = () => {
    if (props.error) {
      return (
        <div className='art-piece-container'>
          <h1 className='error-message' data-cy='error-message'>{props.error}</h1>
        </div>
      )
    } else if (props.loading & !props.error) {
      return (
        <div className='art-piece-container'>
          <div data-cy='loading' className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      )
    } else {
      return (
        <>
          <div className='art-piece-container'>
            <img 
              data-cy='art-image'
              src={props.currentArt.image} 
              alt={props.currentArt.title} 
              className='art-piece'
            />
          </div>
          <div className={`display-next-button-container ${props.currentArt.lastPiece ? 'hidden' : ''}`}>
            <button 
              data-cy='advance-button' 
              className='display-next-button' 
              onClick={props.displayNextPiece}
            > 
            <img className='next-arrow' src={nextArrow} alt='next-art-piece-button'/>
            </button>
          </div>
        </>
      )
    }
  }

  return (
    <section className='art-page'>
      {displayPiece()}
      <ArtDetails 
        currentArt={props.currentArt} 
        addFavorite={props.addFavorite} 
        resetSearch={props.resetSearch}
      />
    </section>
  )
}

ArtPage.propTypes = {
  loading: PropTypes.bool,
  currentArt: PropTypes.object,
  displayNextPiece: PropTypes.func, 
  addFavorite: PropTypes.func,
  resetSearch: PropTypes.func,
  error: PropTypes.string
}

export default ArtPage
