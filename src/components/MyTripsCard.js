import React from 'react'
import { Card, Image, Button, Grid} from 'semantic-ui-react'

function MyTripsCard({trip}) {
  return (
    <div className='my-trips-card'>
        <Card raised>
            <Card.Content as='h3'>My Trip to {trip.park}</Card.Content>
            <Grid columns={2}>
                <Grid.Column width={7}>
                    <Image style={{padding:'5px'}} size='medium' src={trip.imgUrl} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Card.Content style= {{padding:'5px'}}>Selected Hike(s): {trip.hikes}</Card.Content>
                    <Card.Content style= {{padding:'5px'}}> Bio-Diversity Watchlist: {trip.bioDiv}</Card.Content>
                    <Card.Content style= {{padding:'5px'}}>Note for this trip: {trip.notes}</Card.Content>
                </Grid.Column>
            </Grid>
            <Card.Content extra>
                        <Button basic color='green' className='btn'>I've taken this trip!</Button>
            </Card.Content>
        </Card>
      
    </div>
  )
}

export default MyTripsCard
