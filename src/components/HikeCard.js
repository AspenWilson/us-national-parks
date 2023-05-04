import React, {useState} from 'react'
import { Card, Button } from 'semantic-ui-react'

function HikeCard({hike, onClickHike, onUnclickHike}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected((isSelected) => !isSelected)
        onClickHike(hike)
    }

    function handleUnClick() {
        setIsSelected((isSelected) => !isSelected)
        onUnclickHike(hike)
    }

  return (
    <div className = 'hike-card'>
        <Card raised>
            <Card.Header style= {{padding:'5px'}} as='h2'>{hike.name}</Card.Header>
            <Card.Description style= {{padding:'5px'}}>Trail Length: {hike.distance + ' miles'} </Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Class: {hike.class}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Surface: {hike.surface}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Type: {hike.type}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Trail Use: {hike.use}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Seasonal Use? {hike.seasonal}</Card.Description>
            {hike.seasonal == "Yes" ? 
            <Card.Description style= {{padding:'5px'}}>Seasonal Use Details: {hike.seasonalDetails}</Card.Description> : null
        }
             <Card.Content extra>
                {isSelected ? <Button basic color='red' onClick={handleUnClick}>Remove from Trip</Button> : <Button basic color='green' onClick={handleClick}>Add to Trip</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default HikeCard
