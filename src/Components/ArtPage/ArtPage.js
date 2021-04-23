import './ArtPage.css'
import React, { Component } from 'react'
import ArtDetails from '../artDetails/ArtDetails'
import fetchArtInfo from '../../ApiCalls'

const ArtPage = (props) => {

  // simplifyArtObject = (artObject) => {
  //   let cleanedArtObject = {}
  //   cleanedArtObject.id = artObject.objectID
  //   cleanedArtObject.title = artObject.title
  //   cleanedArtObject.artist = artObject.artistDisplayName
  //   cleanedArtObject.medium = artObject.medium
  //   cleanedArtObject.date = artObject.objectDate
  //   cleanedArtObject.image = artObject.primaryImage
  //   cleanedArtObject.smallImage = artObject.primarySmallImage
  //   return cleanedArtObject
  // }


  // render = () => {
    return (
      <section className='art-page'>
        {
          props.currentArtID ?
        <>
          <div className='art-piece-container'>
            <img src={props.currentArt.image} alt={props.currentArt.title} className='art-piece'/>
          </div>
          <div className='display-next-button-container'>
            <button className='display-next-button' onClick={props.displayNextPiece}>></button>
          </div>
          <ArtDetails currentArt={props.currentArt} addFavorite={props.addFavorite}/>
        </>
        :
        <h1>loading</h1>
        }
        {/* <ArtImage /> do I need this? */}
      </section>
    )
  }
// }

export default ArtPage
