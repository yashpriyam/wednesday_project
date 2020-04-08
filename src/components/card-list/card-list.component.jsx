import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  console.log(props),
  <div className='card-list'>
    {props.tracks.map(track => (
      <Card key={track.trackId} track={track} />
    ))}
    {/* {<Card {...props.tracks.results} />} */}
  </div>
);
