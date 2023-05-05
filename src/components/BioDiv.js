import React, {useState} from 'react'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'
import Filter from './Filter'

function BioDiv({commonAnimals, endangered, selectedPark, handleFilter}) {


    const [endangeredToggle, setEndangered] = useState(false)

    function handleToggle() {
        setEndangered(!endangeredToggle)
    }

    const animalToggle = endangeredToggle ? endangered : commonAnimals

    

    const displayAnimals = animalToggle.map((animal) => {
        return <BioDivCard key={animal.id} animal = {animal} />
    })

    const allCategorys = Array.from(new Set(animalToggle.map((animal) => animal.category)))
    const sortedCategorys = allCategorys.sort((a,b) => {
  if (a < b) {
    return -1
  }
  if (a> b) {
    return 1
  }
  return 0
})

    const options=sortedCategorys.map((category) => ({
        key: category,
        text: category,
        value: category
    }))

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
        <Filter 
          options={options} 
          handleFilter={handleFilter}
          placeholder='Select the types of animals you want to add to your watchlist' 
        />
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
