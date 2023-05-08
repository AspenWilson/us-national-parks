import React from 'react'
import { Card,Image } from 'semantic-ui-react'

function Park({park, onClickPark}) {

    const handleClick = () => {
        onClickPark(park)
    }

  return (
    <div className='park-card'>
        <Card raised onClick= {handleClick}>
            <header style= {{padding:'5px', textAlign:'center'}}>{park.title}, <small>{park.state}</small></header>
            <Card.Content style= {{padding:'5px'}}>
            <Image size='medium' src={park.imgUrl} alt={park.title}/>
            </Card.Content>
            <p style= {{padding:'5px'}} as='p'>{park.description}</p>
            <Card.Content extra as='small' style= {{padding:'5px'}}>
                {`Established: ${park.est}`} <br />
                {`Size: ${park.acres} acres`} <br />
                {`Yearly visitors: ${park.visitors}`}
            </Card.Content>
        </Card>
    </div>
  )
}

export default Park
