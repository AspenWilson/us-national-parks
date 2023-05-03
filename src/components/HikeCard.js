import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function HikeCard({hike, onClickHike}) {

    const { name, surface, use, length, seasonal, seasonalDetails, selected} = hike

    function handleClick() {
        onClickHike(hike)
    }


  return (
    <div className = 'hike-card'>
        <Card raised>
            <Card.Header style= {{padding:'5px'}} as='h2'>{name}</Card.Header>
            <Card.Description style= {{padding:'5px'}}>Trail Class: {hike.class}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Surface: {surface}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Use: {use}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Length: {length}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Seasonal Use? {seasonal}</Card.Description>
            {seasonal == "Yes" ? 
            <Card.Description style= {{padding:'5px'}}>Seasonal Use Details: {seasonalDetails}</Card.Description> : null
        }
             <Card.Content extra>
                {selected ? <Button basic color='red' onClick={handleClick}>Remove from Trip</Button> : <Button basic color='green' onClick={handleClick}>Add to Trip</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default HikeCard
