import React from 'react'
import BestHike from './BestHike'
import HikeCard from './HikeCard'
import { Card } from 'semantic-ui-react'
import Filter from './Filter'

function Hikes({bestHike, hikes, onClickHike, onUnclickHike, selectedPark, handleFilter}) {

    const allLengths = Array.from(new Set(hikes.map((hike) => (hike.distance))))
    const sortedLengths = allLengths.sort((a,b) => a - b)

    const sortedHikes=hikes.sort((a,b) => {
        if(a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })

    const options=sortedLengths.map((distance) => ({
        key: distance,
        text: distance + ' miles',
        value: distance
    }))

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
