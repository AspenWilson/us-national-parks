import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function HikesFilter({options,handleFilter}) {

// const options=sortedLengths.map((distance) => ({
//     key: distance,
//     text: distance + ' miles',
//     value: distance
// }))



  return (
    <div>
      <Dropdown 
        placeholder='Filter by Hike Lengths' 
        fluid 
        multiple 
        selection 
        options={options} 
        onChange={handleFilter}/>
    </div>
  )
}

export default HikesFilter