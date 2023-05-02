import React from 'react'
import Park from './Park'
import {Card} from 'semantic-ui-react'

function ParksList({parks}) {

    const allParks = parks.map((park) => {
        return <Park key={park.id} park={park} />
    })

  return (
    <div>
      <Card.Group itemsPerRow={6}>{allParks}</Card.Group>
    </div>
  )
}

export default ParksList
