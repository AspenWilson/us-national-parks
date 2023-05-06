import React, {useState} from 'react'
import { Card, Image, Button, Grid} from 'semantic-ui-react'

function MyTripsCard({trip}) {

    const [isCompleted, setIsCompleted] = useState(false)
    const {park, bioDiv, hikes, notes, imgUrl, completed} = trip
    const allBioDiv= bioDiv.length > 0 ? bioDiv : 'No animals were selected for this trips watchlist'
    const allHikes = hikes.length > 0 ? hikes : `No hikes were selected for this trip`
    const allNotes = notes.length > 0 ? notes : `No notes were added to this trip`

    function handleClick(){
        setIsCompleted(!isCompleted)
    }

  return (
    <div className='my-trips-card'>
        <Card raised>
            <Card.Content as='h3'>My Trip to {park}</Card.Content>
            <Grid columns={2}>
                <Grid.Column width={5}>
                    <Image style={{padding:'5px'}} size='medium' src={imgUrl} />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Card.Content style= {{padding:'5px'}}>Selected Hike(s): {allHikes}</Card.Content>
                    <Card.Content style= {{padding:'5px'}}> Bio-Diversity Watchlist: {allBioDiv}</Card.Content>
                    <Card.Content style= {{padding:'5px'}}>Note for this trip: {allNotes}</Card.Content>
                </Grid.Column>
            </Grid>
            <Card.Content extra>
                {isCompleted? 
                    <Button basic color='red' className='btn' onClick={handleClick}>Return trip to my Saved Trips</Button>
                :
                    <Button basic color='green' className='btn' onClick={handleClick}>I've taken this trip!</Button>}
            </Card.Content>
        </Card>
      
    </div>
  )
}

export default MyTripsCard