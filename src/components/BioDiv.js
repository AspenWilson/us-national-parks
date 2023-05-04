import React, {useState} from 'react'
import BioDivFilter from './BioDivFilter'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'

function BioDiv({commonAnimals, endangered, sortedCategorys, selectedPark}) {

    const [endangeredToggle, setEndangered] = useState(false)

    function handleToggle() {
        setEndangered(!endangeredToggle)
    }

    const animalToggle = endangeredToggle ? endangered : commonAnimals

    console.log(animalToggle)

    const displayAnimals = animalToggle.map((animal) => {
        return <BioDivCard key={animal.id} animal = {animal} />
    })

  return (
    <div>
    {selectedPark ? (
        <>
        <h2>Select the wildlife you'd like to try and spot during your park visit!</h2>
        <h3>Use the slider below to switch between common and engangered animals found in this national park</h3>
        <Radio 
            onChange={handleToggle}
            label={endangeredToggle ? 'Endangered' : 'Common'}
            checked={endangeredToggle}
            slider
            />
            <br />
      {/* <BioDivFilter sortedcategorys={sortedCategorys} /> */}
      <br />
      <Card.Group className='card-group-wrapper'>{displayAnimals}</Card.Group>
      </>
        ) : (
            <h3>Select a park to what kinds of wildlife you can see there and add them to your watchlist!</h3>
        )}
    </div>
  )
}

export default BioDiv
