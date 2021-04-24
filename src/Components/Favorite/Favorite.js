import './Favorite.css'

const Favorite = ({ key, title, image }) => {
  return (
    <article key={key} className='favorite-art'>
      <img src={image} className='favorite-image' alt={title}/>
      <p>{title}</p>
    </article>
  )
}

export default Favorite
//function component that renders one favoite with an image and a title
// given all favorites data from AllFavorites from App