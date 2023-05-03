import React from 'react'
import Park from './Park'
import {Card} from 'semantic-ui-react'
import '../Styles.css'

function ParksList({parks, onClickPark}) {

    const allParks = parks.map((park) => {
        return <Park key={park.id} park={park} onClickPark={onClickPark}/>
    })

  return (
    <div>
      <Card.Group className="right-column" itemsPerRow={5}>{allParks}</Card.Group>
    </div>
  )
}

export default ParksList
