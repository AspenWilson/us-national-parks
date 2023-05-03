import React from 'react'
import { Card } from 'semantic-ui-react'
import '../TripContainer.css'


function TripContainer({selectedPark}) {

    console.log(selectedPark)
  return (
    <div className='sticky-wrapper'>
    {selectedPark ? (
    <Card
        header={selectedPark.title}
        image={selectedPark.imgUrl}
        meta='This is the meta spot'
        description='This is the description spot'
    />
  ) : (
    <Card 
        header='Select a park to start building your trip!'
        image='https://lp-cms-production.imgix.net/2021-09/shutterstock_1525719143.jpg'
        />
  )}
  </div>
  )
}
export default  TripContainer
