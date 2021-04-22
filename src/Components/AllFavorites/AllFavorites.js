import './AllFavorites.css'
import Favorite from '../favorite/Favorite'

const AllFavorites = (props) => {
  const allFavorites = props.favoritedArt.map(art => {
    return (
      <Favorite 
        title={art.title}
        image={art.image}
      />
    )
  })

  return (
    <section>
      {allFavorites}
    </section>
  )
}

export default AllFavorites
// Function component 
// should get and map through all favorited art images and titles