import React, {useState} from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function BioDivCard({animal, onClickAnimal, onUnclickAnimal}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected((isSelected) => !isSelected)
        onClickAnimal(animal)
    }

    function handleUnClick() {
        setIsSelected((isSelected) => !isSelected)
        onUnclickAnimal(animal)
    }

  return (
    <div className = 'hike-card'>
        <Card raised>
            <Card.Content>
                <Image size='medium' src={animal.imgUrl} />
            </Card.Content>
            <Card.Header style= {{padding:'5px'}} as='h2'>{animal.commonName}</Card.Header>
            <Card.Description style= {{padding:'5px'}}>Category: {animal.category} </Card.Description>
            <Card.Description style= {{padding:'5px'}}>Order: {animal.order}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Family: {animal.family}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Scientific Name: {animal.scientificName}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Nativeness: {animal.nativeness}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>Abundance: {animal.abundance}</Card.Description>
            {animal.conservationStatus.length > 1 ? 
            <Card.Description style= {{padding:'5px'}}>Conservation Status: {animal.conservationStatus}</Card.Description> : null
        }
             <Card.Content extra>
                {isSelected ? <Button basic color='red' onClick={handleUnClick}>Remove from Trip Watchlist</Button> : <Button basic color='green' onClick={handleClick}>Add to Trip Watchlist</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default BioDivCard