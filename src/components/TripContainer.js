import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import '../TripContainer.css'


function TripContainer({selectedPark, selectedHikes}) {

    const hikeNames= selectedHikes.length > 0 ? selectedHikes.map((hike) => {
        <li>{hike.name}</li>
    }) : 'Select hikes'

  return (
    <div className='sticky-wrapper'>
    {selectedPark ? (
        <Card >
        <Card.Content>
            <Image size='medium' src={selectedPark.imgUrl} />
            </Card.Content>
            <Card.Description style= {{padding:'5px'}} as='h5'>
                Selected Park: {selectedPark.title}
            </Card.Description>
            <Card.Meta style= {{padding:'5px'}} as='h5'>
                Selected Hike(s):
                {hikeNames}
            </Card.Meta>
        </Card>
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
