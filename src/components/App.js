import  '../App.css';
import NavBar from './NavBar'
import Hikes from './Hikes'
import BioDiv from './BioDiv'
import Home from './Home';
import MyTrips from './MyTrips';
import TripContainer from './TripContainer';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import React, {useEffect, useState} from 'react'


function App() {

  const [parks, setParks] = useState([])
  const [selectedParkId, setSelectedParkId] = useState(null)
  const [bestHike, setBestHike] = useState([])
  const [bioDiv, setBioDiv] = useState([])
  const [endangered, setEndangered] = useState ([])
  const [allHikes, setAllHikes] = useState([])
  const [selectedHikes, setSelectedHikes] = useState ()
  const [selectedAnimals, setSelectedAnimals] = useState([])


//Parks Fetch and selectedPark
useEffect(() => {
  fetch('http://localhost:3004/parks')
  .then((resp) => resp.json())
  .then((parks) => setParks(parks))
},[])

function handleSelectedPark(park) {
  setSelectedParkId(park.id)
}
const selectedPark = parks.find((park) => park.id === selectedParkId)
console.log('i selected', selectedPark)

//States array and sort
const allStates = Array.from(new Set(parks.map((park) => park.state)))
const sortedStates = allStates.sort((a,b) => {
  if (a < b){
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
})
console.log(sortedStates)

//Fetches

useEffect(() => {
  fetch('http://localhost:3004/hikes')
  .then((resp) => resp.json())
  .then((hikes) => {
    const parkBestHike = hikes.find((hike) => hike.parkId === selectedPark.id)
    setBestHike(parkBestHike)
  })
},[selectedParkId])

useEffect(() => {
  fetch('http://localhost:3004/allHikes')
  .then((resp) => resp.json())
  .then((hikes) => {
    const parkAllHikes = hikes.filter((hike) => hike.parkId === selectedPark.id)
    setAllHikes(parkAllHikes)
  })
},[selectedParkId])

useEffect(() => {
  fetch('http://localhost:3004/bioDiv')
  .then((resp) => resp.json())
  .then((animals) => {
    const commonAnimals = animals.filter((animal) => animal.parkId === selectedPark.id)
    setBioDiv(commonAnimals)
  })
}, [selectedParkId])

useEffect(() => {
  fetch('http://localhost:3004/endangered')
  .then((resp) => resp.json())
  .then((animals) => {
    const endangeredAnimals = animals.filter((animal) => animal.parkId === selectedPark.id)
    setEndangered(endangeredAnimals)
  })
},[selectedParkId])


console.log('endangered animals', endangered)


  return (
    <div>
      <NavBar />
      <Grid columns={2}>
        <Grid.Column width = {5}>
      <TripContainer selectedPark={selectedPark}/>
      </Grid.Column>
      <br />
      <Switch>
        <Route exact path="/hikes">
        <Grid.Column width = {11}>
      <Hikes bestHike={bestHike} />
      </Grid.Column>
        </Route>
        <Route exact path="/bio-div">
        <Grid.Column width = {11}>
          <BioDiv />
          </Grid.Column>
        </Route>
        <Route exact path="/my-trips">
        <Grid.Column width = {11}>
          <MyTrips />
          </Grid.Column>
        </Route>
        <Route exact path="/">
        <Grid.Column width = {11}>
          <Home 
            parks={parks} 
            onClickPark={handleSelectedPark}
            states={sortedStates}
          />  
          </Grid.Column>
        </Route>
      </Switch>
      </Grid>



    </div>
  );
}

export default App;
