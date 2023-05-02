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
            <Image src={park.imgUrl} alt={park.title} />
            <Card.Content>
                <Card.Header>{park.title}</Card.Header>
            </Card.Content>
            
        </Card> 

    </div>
  )
}

export default Park
