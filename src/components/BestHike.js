import React from 'react'
import { Card,Image } from 'semantic-ui-react'


function BestHike({bestHike}) {
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
            <Card.Content extra>
            {'Length: ' + bestHike.length + ' miles'} <br />
            </Card.Content>
        </Card>

    </div>
  )
}

export default  BestHike