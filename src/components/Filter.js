import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function Filter({options,handleFilter, placeholder}) {

  return (
    <div className= 'filter'>
      <Dropdown 
        fluid 
        multiple 
        selection 
        options={options} 
        placeholder={placeholder}
        onChange={handleFilter}/>
    </div>
  )
}

export default Filter