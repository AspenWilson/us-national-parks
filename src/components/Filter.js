import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function Filter({options,handleFilter}) {


  return (
    <div>
      <Dropdown 
        multiple selection 
        options={options} 
        onChange={handleFilter}/>
    </div>
  )
}

export default Filter