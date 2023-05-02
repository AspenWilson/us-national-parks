import React from 'react'
import Park from './Park'
import {Card} from 'semantic-ui-react'

function ParksList({parks, onClickPark}) {

    const allParks = parks.map((park) => {
        return <Park key={park.id} park={park} onClickPark={onClickPark}/>
    })

  return (
    <div>
      <Card.Group itemsPerRow={5}>{allParks}</Card.Group>
    </div>
  )
}

export default ParksList
