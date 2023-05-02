import React from 'react'
import ParksList from './ParksList'

export default function Home({parks, onClickPark}) {
    
  return (
    <div>
      <ParksList parks={parks} onClickPark={onClickPark} />
    </div>
  )
}
