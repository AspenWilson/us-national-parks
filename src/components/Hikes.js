import React from 'react'
import BestHike from './BestHike'
import HikeCard from './HikeCard'
import { Card } from 'semantic-ui-react'

function Hikes({bestHike, hikes, onClickHike, onUnclickHike}) {
    

const sortedHikes=hikes.sort((a,b) => {
    if(a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
})

const allHikes = sortedHikes.map((hike) => {
   return <HikeCard hike={hike} key={hike.id} onClickHike={onClickHike} onUnclickHike={onUnclickHike}/>
})
  return (
    <div>
    {hikes.length > 0 ? (
        <>
        <h2>Select the hikes you want to go on during your park visit!</h2>
      <BestHike bestHike={bestHike} onClickHike={onClickHike} onUnclickHike={onUnclickHike}/>
      <br />
      <Card.Group className='card-group-wrapper'>{allHikes}</Card.Group>
      </>
        ) : (
            <h3>Select a park to see hikes!</h3>
        )}
    </div>
  )
}

export default Hikes
