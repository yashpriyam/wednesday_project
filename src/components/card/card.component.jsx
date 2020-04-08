import React from 'react';

import './card.styles.css';

export const Card = props => (
  console.log(props),
  <div className='card-container'>
    {/* <img
      alt='item'
      src={`${props.track.artworkUrl30}`}
    />
    <img
      alt='item'
      src={`${props.track.artworkUrl60}`}
    /> */}
    <img
      alt='item'
      src={`${props.track.artworkUrl100}`}
      height='180'
      width='180'
    />
    <h4> Type: {props.track.wrapperType} </h4>
    <h2> Artist Name: {props.track.artistName} </h2>
    <h3> Genre: {props.track.primaryGenreName} </h3>
    <h3> Track Name: {props.track.trackName} </h3>
    <h3> Track Price: ${props.track.trackPrice} </h3>
    {/* <h6> Preview: {props.track.previewUrl} </h6> */}
    {/* <h6> Track URL: <href>{props.track.trackViewUrl}</href> </h6> */}
    
  </div>
);
