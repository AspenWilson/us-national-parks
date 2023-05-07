import React, {useState} from 'react'
import { Card,Image, Button, Grid } from 'semantic-ui-react'


function BestHike({bestHike, onClickHike, onUnclickHike}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected(!isSelected)
        onClickHike(bestHike)
    }

    function handleUnClick() {
        setIsSelected(!isSelected)
        onUnclickHike(bestHike)
    }
  return (
    <div className='best-hike-card'>
        <Card raised> 
            <Card.Content as='h3'>FEATURED HIKE: Best Hike in {bestHike.title} as voted by Outside Magazine</Card.Content>
            <Card.Content>
            <Grid columns={2}>
                <Grid.Column width={7}>
                    <Image size='medium' src={bestHike.imgUrl} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Card.Header style= {{padding:'5px'}} as='h2'>{bestHike.name}</Card.Header>
                    <Card.Description style= {{padding:'5px'}}>{bestHike.summary}</Card.Description>
                    <Card.Description style= {{padding:'5px'}}>
                        {'Length: ' + bestHike.distance + ' miles'} 
                        <br />
                    </Card.Description>
                </Grid.Column>
            </Grid>
            </Card.Content>
            <Card.Content extra>
                {isSelected ? <Button basic color='red' onClick={handleUnClick}>Remove from Trip</Button> : <Button basic color='green' onClick={handleClick}>Add to Trip</Button>}
            </Card.Content>
        </Card>

    </div>
  )
}

export default  BestHike