import './ArtDetails.css'

const ArtDetails = ({ currentArt }) => {

  return (
    <article>
      <h1>Title: {currentArt.title}</h1>
      <p>Medium: {currentArt.medium}</p>
      <p>Artist: {currentArt.artist}</p>
      <p>Date: {currentArt.date}</p>
    </article>
  )
}

export default ArtDetails
//Should be given a title etc. to display and have a button that route to favorites and home 