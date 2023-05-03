import React from 'react'
import { Card,Image } from 'semantic-ui-react'

function Park({park, onClickPark}) {

    function handleClick () {
        onClickPark(park)
    }




  return (
    <div className='park-card'>
        <Card onClick= {handleClick}>
        <Card.Content>
            <Image size='medium' src={park.imgUrl} />
            </Card.Content>
            <Card.Header style= {{padding:'5px'}} as='h2'>{park.title}</Card.Header>
            <Card.Meta style= {{padding:'5px'}}>{park.state}</Card.Meta>
            <Card.Description style= {{padding:'5px'}}>{park.description}</Card.Description>
            <Card.Content extra>
            {'Established: ' + park.est} <br />
            {'Size: ' + park.acres + ' acres'} <br />
            {'Yearly visitors: ' + park.visitors}
            </Card.Content>
        </Card>

    </div>
  )
}

export default Park
