import React, {useState} from 'react'
import BioDivFilter from './BioDivFilter'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'

function BioDiv({commonAnimals, endangered, sortedCategorys, selectedPark}) {

    const [endangeredToggle, setEndangered] = useState(false)

    // function handleRadioChange () {
    //     if
    // }
  return (
    <div>
    {selectedPark ? (
        <>
        <h2>Select the wildlife you'd like to try and spot during your park visit!</h2>
        <Radio 
            // onChange={}
            label={endangeredToggle ? 'Endangered' : 'Common'}
            checked={endangeredToggle}
            slider
            />
      {/* <BioDivFilter sortedcategorys={sortedCategorys} /> */}
      <br />
      <Card.Group className='card-group-wrapper'>Animals go here</Card.Group>
      </>
        ) : (
            <h3>Select a park to what kinds of wildlife you can see there and add them to your watchlist!</h3>
        )}
    </div>
  )
}

export default BioDiv
