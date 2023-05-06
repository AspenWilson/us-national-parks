import React from 'react'
import BestHike from './BestHike'
import HikeCard from './HikeCard'
import { Card } from 'semantic-ui-react'
import Filter from './Filter'

function Hikes({bestHike, hikes, onClickHike, onUnclickHike, handleFilter, ...commonProps}) {

    const {selectedPark, optionsArr, sortFilters, filterArray} = {...commonProps}
    const allLengths = filterArray (hikes, 'distance')
    const sortedLengths = sortFilters(allLengths)
    const sortedHikes = sortFilters(hikes, 'name')
    const options= optionsArr(sortedLengths)

    const allHikes = sortedHikes.map((hike) => {
        return <HikeCard hike={hike} key={hike.id} onClickHike={onClickHike} onUnclickHike={onUnclickHike}/>
    })

  return (
    <div>
    {selectedPark ? (
        <>
        <h2>Select the hikes you want to go on during your park visit!</h2>
      <BestHike 
        bestHike={bestHike} 
        onClickHike={onClickHike} 
        onUnclickHike={onUnclickHike}/>
      <br />
      {allHikes.length > 0 ? (
            <>
              <Filter 
              handleFilter={handleFilter} 
              options={options} 
              placeholder='Filter by hike length'/>
            <br />
            <Card.Group className='card-group-wrapper'>{allHikes}</Card.Group>
            </>
      ) : (
        <h3>No hikes found for {selectedPark.title}</h3>
      )}
      </>
        ) : (
            <h3>Select a park to see hikes!</h3>
        )}
    </div>
  )
}

export default Hikes
