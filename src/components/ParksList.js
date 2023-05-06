import React from 'react'
import Park from './Park'
import {Card } from 'semantic-ui-react'
import '../Card.css'
import Filter from './Filter'

function ParksList({parks, onClickPark, handleFilter, ...commonProps}) {

  const {optionsArr, sortFilters, filterArray} = {...commonProps}
  const allStates = filterArray(parks, 'state')
  const sortedStates = sortFilters(allStates)
  const options = optionsArr(sortedStates)

  const allParks = parks.map((park) => {
    return <Park key={park.id} park={park} onClickPark={onClickPark}/>
  })

  return (
    <div> 
        <h3>Click a park to start building your trip! Or you can filter the parks by state below.</h3>
        <Filter 
          options={options} 
          handleFilter={handleFilter}
          placeholder='Select state to filter by' 
        />
        <br />
      <Card.Group className='card-group-wrapper'>{allParks}</Card.Group>
      </div>
  )
}

export default ParksList
