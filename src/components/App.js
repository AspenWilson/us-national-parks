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


//Hikes and Bio Div Fetches, all re-rendered when selectedParkId state changes
useEffect(() => {
  Promise.all([
    fetch('http://localhost:3004/hikes').then((resp) => resp.json()),
    fetch('http://localhost:3004/allHikes').then((resp) => resp.json()),
    fetch('http://localhost:3004/bioDiv').then((resp) => resp.json()),
    fetch('http://localhost:3004/endangered').then((resp) => resp.json()),
  ]).then(([hikes, allHikes, animals, endangeredAnimals]) => {
    const parkBestHike = hikes.find((hike) => hike.parkId === selectedPark.id)
    setBestHike(parkBestHike)

    const parkAllHikes = allHikes.filter((hike) => hike.parkId === selectedPark.id)
    setAllHikes(parkAllHikes)

    const commonAnimals = animals.filter((animal) => animal.parkId === selectedPark.id)
    setBioDiv(commonAnimals)

    const endangered = endangeredAnimals.filter((animal) => animal.parkId === selectedPark.id)
    setEndangered(endangered)
  })
}, [selectedParkId])


useEffect(() => {
  setHikesFilter([])
  setAnimalsFilter([])
  setStateFilter([])
},[location])

//Filters

function handleFilter(e, {value}) {
  value === '' ? setStateFilter('') : setStateFilter(value)
}

function handleHikesFilter(e, {value}) {
  value === '' ? setHikesFilter('') : setHikesFilter(value)
}

function handleAnimalsFilter (e, {value}) {
  value === '' ? setAnimalsFilter('') : setAnimalsFilter(value)
}

function filteredList (items, filterValue, filterCallBack) {
  return filterValue.length > 0 ? items.filter((item) => {
    return filterValue.some((filter) => filterCallBack(item, filter)) 
  }) : items
}

//Handle Selected Hikes and Animals
function handleSelected(item, selectedItems, setSelectedItems) {
  setSelectedItems([...selectedItems, item]);
}

function handleDeselect(item, selectedItems, setSelectedItems) {
  setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
}

function handleSelectedPark(park) {
  setSelectedParkId(park.id)
  setSelectedHikes([])
  setSelectedAnimals([])
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
                hikes={filteredList (allHikes, hikesFilter, (hike, distance) => hike.distance.includes(distance))} 
                onClickHike={(hike) => handleSelected(hike, selectedHikes, setSelectedHikes)}
                onUnclickHike={(removedHike) => handleDeselect(removedHike, selectedHikes, setSelectedHikes)}
                selectedPark={selectedPark}
                handleFilter={handleHikesFilter}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/bio-div">
            <Grid.Column width = {11}>
              <BioDiv 
                selectedPark={selectedPark}
                commonAnimals={filteredList (bioDiv, animalsFilter, (animal, category) => animal.category.includes(category))}
                endangered={filteredList (endangered, animalsFilter, (animal, category) => animal.category.includes(category))}
                handleFilter={handleAnimalsFilter}
                animalsFilter={animalsFilter}
                onClickAnimal={(animal) => handleSelected(animal, selectedAnimals, setSelectedAnimals)}
                onUnClickAnimal={(removedAnimal) => handleDeselect(removedAnimal, selectedAnimals, setSelectedAnimals)}
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
                parks={filteredList (parks, stateFilter, (park, state) => park.state.includes(state))} 
                onClickPark={handleSelectedPark} 
                handleFilter={handleFilter}
              />
            </Grid.Column>
          </Route>
        </Switch>
      </Grid>



    </div>
  );
}

export default App;
