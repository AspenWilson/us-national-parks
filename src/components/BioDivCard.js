import React, {useState} from 'react'
import { Card, Button, Image, Grid } from 'semantic-ui-react'

function BioDivCard({animal, onClickAnimal, onUnClickAnimal}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected((isSelected) => !isSelected)
        onClickAnimal(animal)
    }

    function handleUnClick() {
        setIsSelected((isSelected) => !isSelected)
        onUnClickAnimal(animal)
    }

  return (
    <div className = 'animal-card'>
        <Card raised>
            <Card.Content as='h3'>{animal.commonName},  <small>{animal.category}</small></Card.Content>
            <Image 
                height= {130}
                width={140}
                style= {{padding:'5px'}}
                src={animal.imgUrl} 
                floated= 'right' 
                alt={animal.name}
            />
            <Card.Content>
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <Card.Description style= {{padding:'5px'}}><strong>Order:</strong> {animal.order}</Card.Description>
                    <Card.Description style= {{padding:'5px'}}><strong>Family:</strong> {animal.family}</Card.Description>
                    <Card.Description style= {{padding:'5px'}}><strong>Scientific Name:</strong> {animal.scientificName}</Card.Description>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Card.Description style= {{padding:'5px'}}><strong>Nativeness:</strong> {animal.nativeness}</Card.Description>
                    <Card.Description style= {{padding:'5px'}}><strong>Abundance:</strong> {animal.abundance}</Card.Description>
                        {animal.conservationStatus.length > 1 ? 
                            <Card.Description style= {{padding:'5px'}}><strong>Conservation Status:</strong> {animal.conservationStatus}</Card.Description> : null
                        }
                </Grid.Column>
            </Grid>
            </Card.Content>
            <Card.Content extra>
                {isSelected ? <Button basic color='red' onClick={handleUnClick} className='btn'>Remove from Trip Watchlist</Button> : <Button basic color='green' onClick={handleClick} className='btn'>Add to Trip Watchlist</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default BioDivCard