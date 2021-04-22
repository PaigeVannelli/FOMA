import './AllFavorites.css'
import Favorite from '../favorite/Favorite'

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
    <section className='all-favorite-art'>
      {allFavorites}
    </section>
  )
}

export default AllFavorites
// Function component 
// should get and map through all favorited art images and titles