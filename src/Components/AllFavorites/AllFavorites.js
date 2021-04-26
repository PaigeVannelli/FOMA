import './AllFavorites.css'
import Favorite from '../favorite/Favorite'
import PropTypes from 'prop-types';

const AllFavorites = (props) => {
  const allFavorites = props.favoritedArt.map(art => {
    return (
      <Favorite 
        key={art.key}
        id={art.id}
        title={art.title}
        image={art.image}
      />
    )
  })

  return (
    <section className='all-favorites-page'>
      <h1 className='favorites-title'>Favorites</h1>
      <div data-cy='favorites-section' className='all-favorite-art'>
        {allFavorites}
      </div>
    </section>
  )
}

AllFavorites.propTypes = {
  favoritedArt: PropTypes.array,
  resetSerch: PropTypes.func
}

export default AllFavorites
