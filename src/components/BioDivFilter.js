import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function BioDivFilter({sortedCategorys,handleFilter}) {

  return (
    <div>
      <Dropdown 
      placeholder='Select the types of animals you want to add to your watchlist' 
      fluid 
      multiple 
      selection 
      options={sortedCategorys} 
      onChange={handleFilter}/>
    </div>
  )
}

export default BioDivFilter