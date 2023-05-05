import React, {useState} from 'react'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'
import Filter from './Filter'

function BioDiv({commonAnimals, endangered, selectedPark, handleFilter, onClickAnimal, onUnClickAnimal}) {

    const [endangeredToggle, setEndangered] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')

    function handleToggle() {
        setEndangered(!endangeredToggle)
        setSelectedFilter('')
    }

    const animalToggle = endangeredToggle ? endangered : commonAnimals

    const sortedAnimals= animalToggle.sort((a,b) =>{
        if(a.commonName < b.commonName) {
            return -1
        }
        if (a.commonName > b.commonName) {
            return 1
        }
        return 0
    })
    console.log(sortedAnimals)

    const displayAnimals = sortedAnimals.length > 0 ? (
        sortedAnimals.map((animal) => {
        return <BioDivCard key={animal.id} animal = {animal} onClickAnimal={onClickAnimal} onUnClickAnimal={onUnClickAnimal}/>
    })
    ):(
        <h3>No animals were found based on your criteria</h3>
    )

    const allCategorys = Array.from(new Set(animalToggle.map((animal) => animal.category)))
    
    const sortedCategorys = allCategorys.sort((a,b) => {
        if (a < b) {
            return -1
        }
        if (a > b) {
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
            <h3>Select a park to what kinds of wildlife you can see there and add them to your watchlist!</h3>
        )}
    </div>
  )
}

export default BioDiv
