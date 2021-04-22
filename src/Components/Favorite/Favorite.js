import './Favorite.css'

const Favorite = ({ key, title, image }) => {
  return (
    <article key={key}>
      <img src={image} />
      <h2>{title}</h2>
    </article>
  )
}

export default Favorite
//function component that renders one favoite with an image and a title
// given all favorites data from AllFavorites from App