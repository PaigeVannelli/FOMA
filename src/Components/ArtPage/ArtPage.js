import './ArtPage.css'
// import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'
import PropTypes from 'prop-types'
import nextArrow from '../../assets/next.png'

const ArtPage = (props) => {

  // const errorHandling = () => {
  //   if (props.currentArtID & props.validSearch) {
  //     return (
  //       <section className='art-page'>
  //       <>
  //         <div className='art-piece-container'>
  //           <img 
  //             src={props.currentArt.image} 
  //             alt={props.currentArt.title} 
  //             className='art-piece'
  //           />
  //         </div>
  //         <div className='display-next-button-container'>
  //           <button className='display-next-button' onClick={props.displayNextPiece}>></button>
  //         </div>
  //         <ArtDetails currentArt={props.currentArt} addFavorite={props.addFavorite}/>
  //       </>
  //       </section>
  //     )
  //   } else if (!props.currentArtID & props.validSearch) {
  //     return (
  //       <h1>loading</h1>
  //     )
  //   } else if (!props.validSearch) {
  //     return (
  //       <h1>Not a valid search</h1> 
  //     )
  //   }
  // }

  // let displayPiece = () => {
  //   if (!props.loading) {
  //     return (
  //       <>
  //         <div className='art-piece-container'>
  //           <img 
  //             src={props.currentArt.image} 
  //             alt={props.currentArt.title} 
  //             className='art-piece'
  //           />
  //         </div>
  //         <div className={`display-next-button-container ${props.lastPiece ? 'hidden' : ''}`}>
  //           <button className='display-next-button' onClick={props.displayNextPiece}>></button>
  //         </div>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <div className='art-piece-container'>
  //         <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  //       </div>
  //     )
  //   }
  // }
  const checkForErrors = () => {
    if (props.error) {
      return (
        <div className='art-piece-container'>
          <h1 className='error-message' data-cy='error-message'>{props.error}</h1>
        </div>
      )
    } else {
      return (
        <div className='art-piece-container'>
          <div data-cy='loading' className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
  }

  return (
    <section className='art-page'>
      {
        !props.loading ?
      <>
        <div className='art-piece-container'>
          <img 
            data-cy='art-image'
            src={props.currentArt.image} 
            alt={props.currentArt.title} 
            className='art-piece'
          />
        </div>
        <div className={`display-next-button-container ${props.currentArt.lastPiece ? 'hidden' : ''}`}>
          <button 
            data-cy='advance-button' 
            className='display-next-button' 
            onClick={props.displayNextPiece}
          > 
          <img className='next-arrow' src={nextArrow} />
          </button>
        </div>
      </>
      :
      checkForErrors()
    }
    <ArtDetails 
      currentArt={props.currentArt} 
      addFavorite={props.addFavorite} 
      resetSearch={props.resetSearch}
    />
    </section>
  )
}

ArtPage.propTypes = {
  loading: PropTypes.bool,
  validSearch: PropTypes.bool,
  currentArt: PropTypes.object,
  displayNextPiece: PropTypes.func, 
  addFavorite: PropTypes.func,
  resetSearch: PropTypes.func,
  error: PropTypes.string
}

export default ArtPage
