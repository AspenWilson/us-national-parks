import React, {useState} from 'react'
import BestHike from './BestHike'
import HikeCard from './HikeCard'
import { Card } from 'semantic-ui-react'
import Filter from './Filter'
import ModalPopout from './ModalPopout'

function Hikes({bestHike, hikes, onClickHike, onUnclickHike, handleFilter, ...commonProps}) {

    const {selectedPark, optionsArr, sortFilters, filterArray} = {...commonProps}
    const allLengths = filterArray (hikes, 'distance')
    const sortedLengths = sortFilters(allLengths)
    const sortedHikes = sortFilters(hikes, 'name')
    const options= optionsArr(sortedLengths)

    const allHikes = sortedHikes.map((hike) => {
        return <HikeCard hike={hike} key={hike.id} onClickHike={onClickHike} onUnclickHike={onUnclickHike} optionsArr={optionsArr}/>
    })

    //Form Options

    const textInputs = ([
      {dataName: 'name',formName: 'Trail Name'},
      {dataName: 'seasonalDetails',formName: 'Seasonal Details'}
    ])

    const dropdownOptions = ([
      {dataName: 'surface',formName: 'Trail Surface', options:['Asphalt', 'Gravel', 'Native', 'Sand', 'Snow', 'Water']},
      {dataName: 'type',formName: 'Trail Type', options:['Snow Trail', 'Standard Terra Trail', 'Water Trail']},
      {dataName: 'class',formName: 'Trail Class', options:['Class 1: Minimally Developed', 'Class 2: Moderately Developed','Class 3: Developed','Class 4: Highly Developed','Class 5: Fully Developed']},
      {dataName: 'distance',formName: 'Trail Length (miles)', options:['<1', '1 - 5', '3 - 5', '5 - 10','10 - 50']},
      {dataName: 'seasonal',formName: 'Is Trail Seasonal?', options: ['Yes', 'No']}
    ])

    const msg = 'hike'
    const modalProps = {selectedPark, dropdownOptions, optionsArr, textInputs, msg}



  return (
    <div>
    {selectedPark ? (
        <>
        <h2 style={{textAlign:'center'}}>Select the hikes you want to go on during your park visit! <ModalPopout modalProps={modalProps}/></h2>
      <BestHike 
        bestHike={bestHike} 
        onClickHike={onClickHike} 
        onUnclickHike={onUnclickHike}/>
      <br />
      {allHikes.length > 0 ? (
        <>
          <Filter 
            handleFilter={handleFilter} 
            options={options} 
            placeholder='Filter by hike length'/>
          <br />
          <Card.Group className='card-group-wrapper'>{allHikes}</Card.Group>
        </>
      ) : (
        <h3>No hikes found for {selectedPark.title}</h3>
      )}
      </>
        ) : (
          <h3 style={{textAlign:'center'}}>Select a park to see hikes!</h3>
    )}
    </div>
  )
}

export default Hikes
