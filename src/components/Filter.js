import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function Filter({states}) {

const options=states.map((state) => ({
    key: state,
    text: state,
    value: state
}))

function handleChange (e, {value}) {
    console.log(value)
}

  return (
    <div>
      <Dropdown placeholder='Select state or states to filter by' fluid multiple selection options={options} onChange={handleChange}/>
    </div>
  )
}

export default Filter