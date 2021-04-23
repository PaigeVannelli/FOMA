import './ArtDetails.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import favorites from '../../assets/heart.svg'
import bookmark from '../../assets/bookmark.svg'
import activeBookmark from '../../assets/bookmark-outline.svg'
import Nav from '../nav/Nav'

const ArtDetails = (props) => {
  
  const submitFavorite = () => {
    const favoritePost = {
      id: props.currentArt.id,
      title: props.currentArt.title,
      image: props.currentArt.image,
      artist: props.currentArt.artist,
      key: props.currentArt.id,
    }
    props.addFavorite(favoritePost)
    //change logo src
  }
  
  return (
    <article className='art-details'>
      <div className='art-display-nav'>
        <button className='favorite-button' onClick={submitFavorite}>
            <img src={bookmark} className='button bookmark'/>
            {/* <img src={this.props.isfavorited ? bookmark : activeBookmark} className='button bookmark'/> */}
            {/* <img src={bookmark} className={`button ${this.props.isFavorited ? 'bookmark-active' : 'bookmark'}`}/> */}
        </button>
        <Nav submitFavorite={props.submitFavorite} />
      </div>
      <h1 className='title details'>Title: {props.currentArt.title ? props.currentArt.title : 'unknown'}</h1>
      <p className='details'>Medium: {props.currentArt.medium ? props.currentArt.medium : 'unknown'}</p>
      <p className='details'>Artist: {props.currentArt.artist ? props.currentArt.artist : 'unknown'}</p>
      <p className='details'>Date: {props.currentArt.date ? props.currentArt.date : 'unknown'}</p>
    </article>
  )
}

export default ArtDetails
