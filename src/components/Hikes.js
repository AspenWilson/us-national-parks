import React from 'react'
import BestHike from './BestHike'

function Hikes({bestHike}) {
  return (
    <div>
      <BestHike bestHike={bestHike}/>
    </div>
  )
}

export default Hikes
