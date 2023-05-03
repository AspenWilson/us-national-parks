import React from 'react'
import { Card } from 'semantic-ui-react'
  import '../Styles.css'

function TripContainer({selectedPark}) {

    console.log(selectedPark)
  return (
    <Card
        header={selectedPark.title}
        image={selectedPark.imgUrl}
        meta='This is the meta spot'
        description='This is the description spot'
    >

    </Card>
  )
}
export default  TripContainer
