import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function BioDivFilter({sortedCategorys,handleFilter}) {

const options=sortedCategorys.map((category) => ({
    key: category,
    text: category,
    value: category
}))



  return (
    <div>
      <Dropdown placeholder='Select state or states to filter by' fluid multiple selection options={options} onChange={handleFilter}/>
    </div>
  )
}

export default BioDivFilter