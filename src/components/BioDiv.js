import React, {useState} from 'react'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'
import Filter from './Filter'

function BioDiv({commonAnimals, endangered, handleFilter, onClickAnimal, onUnClickAnimal, ...commonProps}) {

    const {selectedPark, optionsArr, sortFilters, filterArray} = {...commonProps}
    const [endangeredToggle, setEndangered] = useState(false)

    function handleToggle() {
        setEndangered(!endangeredToggle)
    }

    const animalToggle = endangeredToggle ? endangered : commonAnimals
    const sortedAnimals = sortFilters(animalToggle, 'commonName')
    const allCategorys = filterArray(animalToggle, 'category')
    const sortedCategorys = sortFilters(allCategorys)
    const options = optionsArr(sortedCategorys)

    const displayAnimals = sortedAnimals.length > 0 ? (
        sortedAnimals.map((animal) => {
        return <BioDivCard key={animal.id} animal = {animal} onClickAnimal={onClickAnimal} onUnClickAnimal={onUnClickAnimal}/>
    })
    ):(
        <h3>No animals were found based on your criteria</h3>
    )

  return (
    <div>
    {selectedPark ? (
        <>
        <h2 style={{textAlign:'center'}}>Select the wildlife you'd like to try and spot during your park visit!</h2>
        <h3>Use the slider below to switch between common and engangered animals found in this national park</h3>
        <Radio 
            onChange={handleToggle}
            label={endangeredToggle ? 'Endangered' : 'Common'}
            checked={endangeredToggle}
            slider
            />
            <br />
        <h5>Filter by animal category</h5>
        <Filter 
          options={options} 
          handleFilter={handleFilter}
          placeholder='Select the types of animals you want to add to your watchlist' 
        />
        <br />
        <Card.Group className='card-group-wrapper'>{displayAnimals}</Card.Group>
        </>
        ) : (
            <h3 style={{textAlign:'center'}}>Select a park to what kinds of wildlife you can see there and add them to your watchlist!</h3>
        )}
    </div>
  )
}

export default BioDiv
