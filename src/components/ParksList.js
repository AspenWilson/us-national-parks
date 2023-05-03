import React from 'react'
import Park from './Park'
import {Card } from 'semantic-ui-react'
import '../Card.css'

function ParksList({parks, onClickPark}) {

    const allParks = parks.map((park) => {
        return <Park key={park.id} park={park} onClickPark={onClickPark}/>
    })

  return (
      <Card.Group className='card-group-wrapper'>{allParks}</Card.Group>
  )
}

export default ParksList
