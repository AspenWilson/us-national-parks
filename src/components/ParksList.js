import React from 'react'
import Park from './Park'
import {Card } from 'semantic-ui-react'
import '../Card.css'
import Filter from './Filter'

function ParksList({parks, onClickPark, handleFilter}) {

  const allStates = Array.from(new Set(parks.map((park) => park.state)))
  
  const sortedStates = allStates.sort((a,b) => {
    if (a < b){
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  const allParks = parks.map((park) => {
    return <Park key={park.id} park={park} onClickPark={onClickPark}/>
  })

  const options=sortedStates.map((state) => ({
    key: state,
    text: state,
    value: state
  }))

  return (
    <div> 
        <h3>Click a park to start building your trip! Or you can filter the parks by state below.</h3>
        <Filter 
          options={options} 
          handleFilter={handleFilter}
          placeholder='Select state or states to filter by' 
        />
        <br />
      <Card.Group className='card-group-wrapper'>{allParks}</Card.Group>
      </div>
  )
}

export default ParksList
