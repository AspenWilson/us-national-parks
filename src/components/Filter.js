import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function Filter({options,handleFilter}) {

const options=states.map((state) => ({
    key: state,
    text: state,
    value: state
}))



  return (
    <div>
      <Dropdown 
        placeholder='Select state or states to filter by' 
         multiple selection 
        options={options} 
        onChange={handleFilter}/>
    </div>
  )
}

export default Filter