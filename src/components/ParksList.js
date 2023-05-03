import React from 'react'
import Park from './Park'
import {Card } from 'semantic-ui-react'
import '../Card.css'
import Filter from './Filter'

function ParksList({parks, onClickPark, states, handleFilter}) {

    const allParks = parks.map((park) => {
        return <Park key={park.id} park={park} onClickPark={onClickPark}/>
    })

  return (
    <div> 
        <h3>Click a park to start building your trip! Or you can filter the parks by state below.</h3>
        <Filter states={states} handleFilter={handleFilter}/>
        <br />
      <Card.Group className='card-group-wrapper'>{allParks}</Card.Group>
      </div>
  )
}

export default ParksList
