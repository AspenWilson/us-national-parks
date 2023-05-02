import React from 'react'
import { Card,Image } from 'semantic-ui-react'
import '../Styles.css'

function Park({park, onClickPark}) {

    function handleClick () {
        onClickPark(park)
    }

  return (
    <div>
        <Card 
            raised 
            onClick= {handleClick}>
            <Card.Content>
                <Card.Header>{park.title}</Card.Header>
            </Card.Content>
            <Image src={park.imgUrl} alt={park.title} size='medium'/>
        </Card> 

    </div>
  )
}

export default Park
