import  '../App.css';
import NavBar from './NavBar'
import Hikes from './Hikes'
import BioDiv from './BioDiv'
import Home from './Home';
import MyTrips from './MyTrips';
import { Route, Switch } from 'react-router-dom'
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
      <Switch>
        <Route exact path="/hikes">
          <Hikes 
            bestHike={bestHike}
          />
        </Route>
        <Route exact path="/bio-div">
          <BioDiv />
        </Route>
        <Route exact path="/my-trips">
          <MyTrips />
        </Route>
        <Route exact path="/">
          <Home 
            parks={parks} 
            onClickPark={handleSelectedPark}
          />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
