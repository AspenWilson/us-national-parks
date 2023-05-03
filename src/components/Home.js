import React from 'react'
import ParksList from './ParksList'
import {Grid} from 'semantic-ui-react'



export default function Home({parks, onClickPark, states}) {
    
  return (
    <Grid>
        <Grid.Row stretched>
            <Grid.Column>
                <ParksList parks={parks} onClickPark={onClickPark} states={states}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>


  )
}
