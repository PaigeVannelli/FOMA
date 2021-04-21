import './ArtDetails.css'

const ArtDetails = ({ currentArt }) => {

  return (
    <article className='art-details'>
      <h1 className='title details'>Title: {currentArt.title}</h1>
      <p className='details'>Medium: {currentArt.medium}</p>
      <p className='details'>Artist: {currentArt.artist}</p>
      <p className='details'>Date: {currentArt.date}</p>
    </article>
  )
}

export default ArtDetails
