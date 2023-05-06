import React, {useState} from 'react'
import { Card, Image, Button, Form, TextArea } from 'semantic-ui-react'
import '../TripContainer.css'


function TripContainer({selectedPark, selectedHikes, selectedAnimals, setNotes, handleSubmit}) {

    const hikeNames= selectedHikes.length > 0 ? selectedHikes.map((hike) => {
        return  <li key={hike.id}>{hike.name}</li>
      }) : 'Select hikes to add them to your National Park trip'
  
      const bioDivNames = selectedAnimals.length > 0 ? selectedAnimals.map((animal) => {
          return <li key={animal.id}>{animal.commonName}</li>
      }) : `Select animals you'd like to remind yourself to lookout for`

    
  return (
    <div className='sticky-wrapper'>
    {selectedPark ? (
        <Card >
            <Card.Content textAlign='center' as='h1'>My Trip Builder</Card.Content>
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
                <Form onSubmit={handleSubmit}>
                    <TextArea onChange={(e) => setNotes(e.target.value)} placeholder='Add notes to your trip...' />
                    <Button basic color='green' className='btn' type='submit' >Save my Trip!</Button>
                </Form>
            </Card.Content>
        </Card>
  ) : (
    <Card>
        <Card.Content textAlign='center' as='h1'>My Trip Builder</Card.Content>
        <Card.Content>
            <Image size='medium' src='https://lp-cms-production.imgix.net/2021-09/shutterstock_1525719143.jpg'/>
        </Card.Content>
        <Card.Description style= {{padding:'5px'}}>Select a park to start building your trip!</Card.Description>
    </Card>
  )}
  </div>
  )
}
export default  TripContainer
