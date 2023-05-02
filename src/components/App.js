import logo from '../logo.svg';
import  '../App.css';
import NavBar from './NavBar'
import Hikes from './Hikes'
import BioDiv from './BioDiv'
import ParksList from './ParksList'
import React, {useEffect, useState} from 'react'


function App() {

  const [parks, setParks] = useState([])

useEffect(() => {
  fetch('http://localhost:3004/parks')
  .then((resp) => resp.json())
  .then((parks) => setParks(parks))
},[])

console.log(parks)

  return (
    <div className="App">
      <NavBar />
      <Hikes />
      <BioDiv />
      <ParksList parks={parks}/>
    </div>
  );
}

export default App;
