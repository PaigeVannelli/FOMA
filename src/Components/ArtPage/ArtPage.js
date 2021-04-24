import './ArtPage.css'
// import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'
import PropTypes from 'prop-types'

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

  return (
    <section className='art-page'>
      {
        !props.loading ?
      <>
        <div className='art-piece-container'>
          <img 
            src={props.currentArt.image} 
            alt={props.currentArt.title} 
            className='art-piece'
          />
        </div>
        <div className={`display-next-button-container ${props.lastPiece ? 'hidden' : ''}`}>
          <button className='display-next-button' onClick={props.displayNextPiece}>></button>
        </div>
      </>
      :
      <div className='art-piece-container'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    }
    <ArtDetails 
      currentArt={props.currentArt} 
      addFavorite={props.addFavorite} 
      isFavorited={props.isFavorited}
      resetSearch={props.resetSearch}
    />
    </section>
  )
}

ArtPage.propTypes = {
  loading: PropTypes.bool,
  validSearch: PropTypes.bool,
  currentArtID: PropTypes.number,
  currentArt: PropTypes.object,
  displayNextPiece: PropTypes.func, 
  addFavorite: PropTypes.func,
  isFavorited: PropTypes.bool, 
  lastPiece: PropTypes.bool,
  resetSearch: PropTypes.func
}

export default ArtPage
