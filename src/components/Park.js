import React from 'react'
import { Card,Image } from 'semantic-ui-react'

function Park({park, onClickPark}) {

    function handleClick () {
        onClickPark(park)
    }

    const extra = `Establisted: {park.est}`
  return (
    <div>
        <Card 
            onClick= {handleClick}
            header= {park.title}
            image = {park.imgUrl}
            meta= {park.state}
            description= {park.description}
            extra={extra}
        />

    </div>
  )
}

export default Park
