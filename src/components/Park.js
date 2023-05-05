import React from 'react'
import { Card,Image } from 'semantic-ui-react'

function Park({park, onClickPark}) {

    function handleClick () {
        onClickPark(park)
    }

  return (
    <div className='park-card'>
        <Card raised onClick= {handleClick}>
        <Card.Content style= {{padding:'5px'}} textAlign='center' as='h3'>{park.title}, <small>{park.state}</small></Card.Content>
        <Card.Content>
            <Image size='medium' src={park.imgUrl} />
        </Card.Content>
            <Card.Description style= {{padding:'5px'}} as='p'>{park.description}</Card.Description>
            <Card.Content extra as='small' >
            {'Established: ' + park.est} <br />
            {'Size: ' + park.acres + ' acres'} <br />
            {'Yearly visitors: ' + park.visitors}
            </Card.Content>
        </Card>

    </div>
  )
}

export default Park
