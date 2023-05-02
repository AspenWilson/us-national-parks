import React from 'react'


function BestHike({bestHike}) {
  return (
    <div>
        <header>Best Hike in {bestHike.title}</header>
      {bestHike.hike}
        <img src={bestHike.imgUrl} />
    </div>
  )
}

export default  BestHike