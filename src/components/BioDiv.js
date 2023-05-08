import React, {useState} from 'react'
import { Card, Radio } from 'semantic-ui-react'
import BioDivCard from './BioDivCard'
import Filter from './Filter'
import ModalPopout from './ModalPopout'

function BioDiv({commonAnimals, endangered, handleFilter, onClickAnimal, setFormValues, formValues, onUnClickAnimal, ...commonProps}) {

    const {selectedPark, optionsArr, sortFilters, filterArray, handleNewItemSubmit} = {...commonProps}
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

    //Form Options and Modal setup

    const textInputs = ([
        {dataName: 'commonName',formName: 'Common Name'},
        {dataName: 'scientificName',formName: 'Scientific Name'},
        {dataName: 'family',formName: 'Family'},
        {dataName: 'order',formName: 'Order'},
        {dataName: 'imgUrl',formName: 'Image Link'},
        {dataName: 'conservationStatus',formName: 'Conservation Status'}
    ])

    const dropdownOptions = ([
        {dataName: 'category',formName: 'Animal Category', options:['Amphibian', 'Bird', 'Fish', 'Mammal', 'Reptile']},
        {dataName: 'nativeness',formName: 'Animal Nativeness', options:['Native', 'Not Native', 'Unknown']},
        {dataName: 'abundance',formName: 'Animal Abundance', options:['Abundant', 'Common', 'Endangered', 'Threatened']}
    ])

    const msg= 'animal'
    const modalProps = {selectedPark, dropdownOptions, optionsArr, textInputs, msg, endangered, commonAnimals, handleNewItemSubmit}

  return (
    <div>
    {selectedPark ? (
        <>
        <h2 style={{textAlign:'center'}}>Select the wildlife you'd like to try and spot during your park visit! <ModalPopout {...modalProps} setFormValues={setFormValues} formValues={formValues}/></h2>
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
