import React, {useState} from 'react'
import MyTripsCard from './MyTripsCard'
import { Radio } from 'semantic-ui-react'

function MyTrips({myTrips}) {

  const [completedToggle, setCompletedToggle] = useState(false)
  const savedTrips = myTrips.filter((trip) => trip.completed === false)
  const completedTrips = myTrips.filter((trip) => trip.completed === true)
  const displayTrips = completedToggle ? completedTrips : savedTrips

  const allTrips = displayTrips.map((trip) => {
    return <MyTripsCard key={trip.id} trip={trip} />
  })

  function handleToggle() {
    setCompletedToggle(!completedToggle)
  }

  return (
    <div>
      <h2>Your Saved Trips</h2>
      <h3>Use the slider below to switch between your saved and completed trips</h3>
      <Radio
        onChange={handleToggle}
        label={completedToggle ? 'Completed Trips' : 'Saved Trips'}
        checked={completedToggle}
        slider
      />
      <br/>
      <br/>
      {allTrips}
    </div>
  )
}
export default MyTrips
