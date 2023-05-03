import React from 'react'
import BestHike from './BestHike'

function Hikes({bestHike}) {
  return (
    <div>
        <h2>Select the hikes you want to go on during your park visit!</h2>
      <BestHike bestHike={bestHike}/>
    </div>
  )
}

export default Hikes
