import React from 'react'
import ParksList from './ParksList'
import {Grid} from 'semantic-ui-react'


export default function Home({parks, onClickPark}) {
    
  return (
    <Grid>
        <Grid.Row stretched>
            <Grid.Column>
                <ParksList parks={parks} onClickPark={onClickPark} />
            </Grid.Column>
        </Grid.Row>
    </Grid>


  )
}
