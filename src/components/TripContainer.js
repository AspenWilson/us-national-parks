import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import '../TripContainer.css'


function TripContainer({selectedPark, selectedHikes, selectedAnimals}) {

    const hikeNames= selectedHikes.length > 0 ? selectedHikes.map((hike) => {
      return  <li>{hike.name}</li>
    }) : 'Select hikes to add them to your National Park trip'

    const bioDivNames = selectedAnimals.length > 0 ? selectedAnimals.map((animal) => {
        return <li>{animal.commonName}</li>
    }) : `Selected animals you'd like to remind yourself to lookout for`

console.log(selectedHikes)

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
                <ul>{hikeNames}</ul>
            </Card.Meta>
            <Card.Meta style= {{padding:'5px'}} as='h5'>
                Bio-Diversity Watchlist:
                <ul>{bioDivNames}</ul>
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
