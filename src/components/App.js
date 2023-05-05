import  '../App.css';
import NavBar from './NavBar'
import Hikes from './Hikes'
import BioDiv from './BioDiv'
import ParksList from './ParksList'
import MyTrips from './MyTrips';
import TripContainer from './TripContainer';
import { Route, Switch, useLocation } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import React, {useEffect, useState} from 'react'


function App() {

  const [parks, setParks] = useState([])
  const [selectedParkId, setSelectedParkId] = useState(null)
  const [bestHike, setBestHike] = useState([])
  const [bioDiv, setBioDiv] = useState([])
  const [endangered, setEndangered] = useState ([])
  const [allHikes, setAllHikes] = useState([])
  const [selectedHikes, setSelectedHikes] = useState ([])
  const [selectedAnimals, setSelectedAnimals] = useState([])
  const [stateFilter, setStateFilter] = useState([])
  const [hikesFilter, setHikesFilter] = useState([])
  const [animalsFilter, setAnimalsFilter] = useState([])
  const location= useLocation()


//Parks Fetch and selectedPark
useEffect(() => {
  fetch('http://localhost:3004/parks')
  .then((resp) => resp.json())
  .then((parks) => setParks(parks))
},[])

const selectedPark = parks.find((park) => park.id === selectedParkId)

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

//Hikes Fetches, Filtering Arrays and Sorts

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


useEffect(() => {
  setHikesFilter('')
  setAnimalsFilter('')
  setStateFilter('')
},[location])

//Filters
function handleFilter(e,{value}) {
  value === '' ? setStateFilter('') : setStateFilter(value)
}

const parksToDisplay = stateFilter.length > 0 ? parks.filter((park) => {
  return stateFilter.some((state) => park.state.includes(state))
}) : parks

function handleHikesFilter(e,{value}) {
  value === '' ? setHikesFilter('') : setHikesFilter(value)
}

const hikesToDisplay = hikesFilter.length > 0 ? allHikes.filter((hike) => {
  return hikesFilter.some((distance) => hike.distance.includes(distance))
}) : allHikes

function handleAnimalsFilter (e, {value}) {
  value === '' ? setAnimalsFilter('') : setAnimalsFilter(value)
}
console.log('filter', animalsFilter)
const filteredCommon = animalsFilter.length > 0 ? bioDiv.filter((animal) => {
  return animalsFilter.some((category) => animal.category.includes(category))
}) : bioDiv

const filteredEndangered = animalsFilter.length > 0 ? bioDiv.filter((animal) => {
  return animalsFilter.some((category) => animal.category.includes(category))
}) : endangered

//Handle Selected Hikes and Animals

function handleSelectedHikes(hike) {
  setSelectedHikes([...selectedHikes, hike])
}

function handleDeselectHike(removedHike) {
  setSelectedHikes(selectedHikes.filter((hike) => hike !== removedHike))
}

function handleSelectedAnimals(animal) {
  setSelectedAnimals([...selectedAnimals, animal])
}

function handleDeselectedAnimal(removedAnimal) {
  setSelectedAnimals(selectedAnimals.filter((animal) => animal !== removedAnimal))
}
console.log('animals', selectedAnimals)

function handleSelectedPark(park) {
  setSelectedParkId(park.id)
  setSelectedHikes([])
  setSelectedAnimals([])
  setHikesFilter([])
  setAnimalsFilter([])
}

  return (
    <div>
      
      <NavBar />
      <Grid columns={2}>
        <Grid.Column width = {5}>
          <TripContainer 
            selectedPark={selectedPark} 
            selectedHikes={selectedHikes} 
            selectedAnimals={selectedAnimals}
          />
        </Grid.Column>
        <br />
        <Switch>
          <Route exact path="/hikes">
            <Grid.Column width = {11}>
              <Hikes 
                bestHike={bestHike} 
                hikes={hikesToDisplay} 
                onClickHike={handleSelectedHikes}
                onUnclickHike={handleDeselectHike}
                selectedPark={selectedPark}
                handleFilter={handleHikesFilter}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/bio-div">
            <Grid.Column width = {11}>
              <BioDiv 
                selectedPark={selectedPark}
                commonAnimals={filteredCommon}
                endangered={filteredEndangered}
                handleFilter={handleAnimalsFilter}
                animalsFilter={animalsFilter}
                onClickAnimal={handleSelectedAnimals}
                onUnClickAnimal={handleDeselectedAnimal}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/my-trips">
            <Grid.Column width = {11}>
              <MyTrips />
            </Grid.Column>
          </Route>
          <Route exact path="/">
            <Grid.Column width = {11}>
              <ParksList 
                parks={parksToDisplay} 
                onClickPark={handleSelectedPark} 
                handleFilter={handleFilter}
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
