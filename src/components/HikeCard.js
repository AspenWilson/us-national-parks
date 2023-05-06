import React, {useState} from 'react'
import { Card, Button } from 'semantic-ui-react'

function HikeCard({hike, onClickHike, onUnclickHike}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected(!isSelected)
        onClickHike(hike)
    }

    function handleUnClick() {
        setIsSelected(!isSelected)
        onUnclickHike(hike)
    }

  return (
    <div className = 'hike-card'>
        <Card raised>
            <Card.Content as='h2'><strong>{hike.name}</strong>,  <small>{hike.distance + ' miles'}</small></Card.Content>
            <Card.Content>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Class:</strong> {hike.class}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Surface:</strong> {hike.surface}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Type:</strong> {hike.type}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Use:</strong> {hike.use}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Seasonal Use?</strong> {hike.seasonal}</Card.Description>
                {hike.seasonal == "Yes" ? 
                    <Card.Description style= {{padding:'5px'}}><strong>Seasonal Use Details:</strong> {hike.seasonalDetails}</Card.Description> : null
                }
            </Card.Content>
             <Card.Content extra>
                {isSelected ? 
                <Button basic color='red' onClick={handleUnClick} className='btn'>Remove from Trip</Button> : 
                <Button basic color='green' onClick={handleClick} className='btn'>Add to Trip</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default HikeCard
