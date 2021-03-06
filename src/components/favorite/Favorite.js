import './Favorite.css'
import PropTypes from 'prop-types'

const Favorite = ({ key, title, image }) => {
  return (
    <article key={key} className='favorite-art'>
      <img src={image} className='favorite-image' alt={title}/>
      <p className='title'>{title}</p>
    </article>
  )
}

Favorite.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Favorite
