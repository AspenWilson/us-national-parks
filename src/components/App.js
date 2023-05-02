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
  const [bestHikes, setBestHikes] = useState([])
  const [bestHike, setBestHike] = useState([])
  const [bioDiv, setBioDv] = useState([])
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


console.log('best hike is', bestHike.hike )


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/hikes">
          <Hikes />
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
