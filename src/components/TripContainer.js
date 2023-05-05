import React from 'react'
import { Card, Image, Button, Form, TextArea } from 'semantic-ui-react'
import '../TripContainer.css'


function TripContainer({selectedPark, selectedHikes, selectedAnimals}) {

    const hikeNames= selectedHikes.length > 0 ? selectedHikes.map((hike) => {
      return  <li>{hike.name}</li>
    }) : 'Select hikes to add them to your National Park trip'

    const bioDivNames = selectedAnimals.length > 0 ? selectedAnimals.map((animal) => {
        return <li>{animal.commonName}</li>
    }) : `Select animals you'd like to remind yourself to lookout for`

console.log(selectedHikes)

  return (
    <div className='sticky-wrapper'>
    {selectedPark ? (
        <Card >
            <Card.Content textAlign='center' as='h1'>My trip</Card.Content>
        <Card.Content>
            <Image size='medium' src={selectedPark.imgUrl} />
            </Card.Content>
            <Card.Content style= {{padding:'5px'}}>
                <strong>Selected Park:</strong> {selectedPark.title}
            </Card.Content>
            <Card.Content style= {{padding:'5px'}} >
                <strong>Selected Hike(s):</strong>
                <ul>{hikeNames}</ul>
            </Card.Content>
            <Card.Content style= {{padding:'5px'}} >
                <strong>Bio-Diversity Watchlist:</strong>
                <ul>{bioDivNames}</ul>
            </Card.Content>
            <Card.Content>
                <Form>
                    <TextArea placeholder='Add notes to your trip...' />
                </Form>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='green' className='btn'>Save my Trip!</Button>
            </Card.Content>
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
