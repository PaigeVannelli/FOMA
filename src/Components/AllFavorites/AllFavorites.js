import './AllFavorites.css'
import Favorite from '../favorite/Favorite'
import Nav from '../nav/Nav'
import PropTypes from 'prop-types';

const AllFavorites = (props) => {
  const allFavorites = props.favoritedArt.map(art => {
    return (
      <Favorite 
        key={art.key}
        id={art.id}
        title={art.title}
        image={art.image}
        artist={art.artist}
      />
    )
  })

  return (
    <section className='all-favorites-page'>
      <div className='all-favorite-art'>
        {allFavorites}
      </div>
      <Nav className='nav-buttons'/>
    </section>
  )
}

AllFavorites.propTypes = {
  favoritedArt: PropTypes.array
}

export default AllFavorites
// Function component 
// should get and map through all favorited art images and titles