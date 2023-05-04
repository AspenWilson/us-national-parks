import React, {useState} from 'react'
import { Card,Image, Button } from 'semantic-ui-react'


function BestHike({bestHike, onClickHike, onUnclickHike}) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick () {
        setIsSelected((isSelected) => !isSelected)
        onClickHike(bestHike)
    }

    function handleUnClick() {
        setIsSelected((isSelected) => !isSelected)
        onUnclickHike(bestHike)
    }
  return (
    <div className='best-hike-card'>
        <Card> 
            <Card.Content as='h3'>FEATURED HIKE: Best Hike in {bestHike.title} as voted by Outside Magazine</Card.Content>
        <Card.Content>
            <Image size='medium' src={bestHike.imgUrl} />
            </Card.Content>
            <Card.Header style= {{padding:'5px'}} as='h2'>{bestHike.hike}</Card.Header>
            {/* <Card.Meta style= {{padding:'5px'}}>{park.state}</Card.Meta> */}
            <Card.Description style= {{padding:'5px'}}>{bestHike.summary}</Card.Description>
            <Card.Description style= {{padding:'5px'}}>
            {'Length: ' + bestHike.distance + ' miles'} <br />
            </Card.Description>
            <Card.Content extra>
                {isSelected ? <Button basic color='red' onClick={handleUnClick}>Remove from Trip</Button> : <Button basic color='green' onClick={handleClick}>Add to Trip</Button>}
            </Card.Content>
        </Card>

    </div>
  )
}

export default  BestHike