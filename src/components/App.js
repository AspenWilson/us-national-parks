import  '../App.css';
import NavBar from './NavBar'
import Hikes from './Hikes'
import BioDiv from './BioDiv'
import ParksList from './ParksList'
import MyTrips from './MyTrips';
import TripContainer from './TripContainer';
import Sources from './Sources';
import { Route, Switch, useLocation } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import React, {useEffect, useState} from 'react'


function App() {

  const url = `http://localhost:3004`
  const [parks, setParks] = useState([])
  const [bioDiv, setBioDiv] = useState([])
  const [myTrips, setMyTrips] = useState([])
  const [bestHike, setBestHike] = useState([])
  const [allHikes, setAllHikes] = useState([])
  const [endangered, setEndangered] = useState ([])
  const [selectedParkId, setSelectedParkId] = useState(null)
  const [selectedAnimals, setSelectedAnimals] = useState([])
  const [selectedHikes, setSelectedHikes] = useState ([])
  const [stateFilter, setStateFilter] = useState([])
  const [hikesFilter, setHikesFilter] = useState([])
  const [animalsFilter, setAnimalsFilter] = useState([])
  const [notes, setNotes] = useState('')
  const location= useLocation()
  const [formValues, setFormValues] = useState({})

//Parks Fetch and selectedPark
useEffect(() => {
  fetch(url + '/parks')
  .then((resp) => resp.json())
  .then((parks) => setParks(parks))
},[])

const selectedPark = parks.find((park) => park.id === selectedParkId)

//Hikes and Bio Div Fetches, all re-rendered when selectedParkId state changes
useEffect(() => {
  Promise.all([
    fetch(url + '/hikes').then((resp) => resp.json()),
    fetch(url + '/allHikes').then((resp) => resp.json()),
    fetch(url + '/bioDiv').then((resp) => resp.json()),
    fetch(url + '/endangered').then((resp) => resp.json()),
  ])
  .then(([hikes, allHikes, animals, endangeredAnimals]) => {
    const parkBestHike = hikes.find((hike) => hike.parkId === selectedParkId)
      setBestHike(parkBestHike)

    const parkAllHikes = allHikes.filter((hike) => hike.parkId === selectedParkId)
      setAllHikes(parkAllHikes)

    const commonAnimals = animals.filter((animal) => animal.parkId === selectedParkId)
      setBioDiv(commonAnimals)

    const endangered = endangeredAnimals.filter((animal) => animal.parkId === selectedParkId)
      setEndangered(endangered)
  })
}, [selectedParkId])


useEffect(() => {
  setHikesFilter([])
  setAnimalsFilter([])
  setStateFilter([])
},[location])

//MyTrips Fetch
useEffect(() => {
  fetch(url + '/myTrips')
  .then((resp) => resp.json())
  .then((myTrips) => setMyTrips(myTrips))
},[myTrips])

//Filters
function handleFilter(e, {value, callback}) {
  value === '' ? callback('') : callback(value)
}

const filteredList = (items, filterValue, filterCallBack) => {
  return filterValue.length > 0 ? items.filter((item) => filterValue.some((filter) => filterCallBack(item, filter))) : items
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

  //POST functions
  function handleSubmit (e){
    e.preventDefault()
    const tripHikes= selectedHikes.map((hike) => hike.name)
    const tripBioDiv = selectedAnimals.map((animal) => animal.commonName)
    const newTrip = ({
        park: selectedPark.title, 
        imgUrl: selectedPark.imgUrl, 
        bioDiv: tripBioDiv, 
        hikes: tripHikes, 
        notes: notes,
        completed: false
    })
    fetch(url + `/myTrips`, {
      method: 'POST', 
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(newTrip)
    })
    .then((resp) => resp.json())
    .then((addedTrip) => {
      setMyTrips(addedTrip, ...myTrips)
      setSelectedAnimals([])
      setSelectedHikes([])
      setNotes([])
      setSelectedParkId(null)
    })
  }

  function handleTextChange(e, input){
    setFormValues((prevData) => ({
      ...prevData, 
      [input]: e.target.value
    }))
  }

  function handleDropDownChange(e, input, {value}){
    setFormValues((prevData) => ({
      ...prevData, 
      [input]: value
    }))
  }

  function handleNewItemSubmit(){
    const newEntry= {
      ...formValues,
      parkId: selectedPark.id,
      park: selectedPark.title
    }
    fetch(url+'/allHikes', {
      method:'POST',
      headers: {
        'Content-type' :'application/json'
      },
      body: JSON.stringify(newEntry)
    })
    .then((resp) => resp.json())
    .then((newHike) => {
      setAllHikes([newHike,...allHikes])
    })
    setFormValues({})
  }

  //DRY Functions
function filterArray (items, filterKey){
  return Array.from(new Set(items.map((item) => item[filterKey])))
}

function sortFilters(arr, key) {
  const sortFn = key
    ? (a, b) => {
      if (a[key] < b[key]) {return -1;}
      if (a[key] > b[key]) {return 1;}
      return 0; }
    : (a, b) => {
      if (a < b) {return -1;}
      if (a > b) {return 1;}
      return 0;};
  const newSortedArray = arr.sort(sortFn);
  return newSortedArray;
  }

  function optionsArr(arr) {
    const options= arr.map((item) => ({key: item,text: item, value: item }))
    return options 
  }

  const commonProps={selectedPark, formValues, optionsArr, sortFilters, filterArray, handleNewItemSubmit, handleTextChange, handleDropDownChange}

  return (
    <div>
      <NavBar />
      <Grid columns={2}>
        <Grid.Column width = {5}>
          <TripContainer 
            selectedPark={selectedPark} 
            selectedHikes={selectedHikes} 
            selectedAnimals={selectedAnimals}
            setNotes = {setNotes}
            handleSubmit = {handleSubmit}
          />
        </Grid.Column>
        <br />
        <Switch>
          <Route exact path="/hikes">
            <Grid.Column width = {11}>
              <Hikes
                {...commonProps} 
                bestHike={bestHike} 
                hikes={filteredList (allHikes, hikesFilter, (hike, distance) => hike.distance.includes(distance))} 
                onClickHike={(hike) => handleSelected(hike, selectedHikes, setSelectedHikes)}
                onUnclickHike={(removedHike) => handleDeselect(removedHike, selectedHikes, setSelectedHikes)}
                handleFilter={(e, {value}) => handleFilter(e, { value: value, callback: setHikesFilter })}
                setFormValues={setFormValues}
                formValues={formValues}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/bio-div">
            <Grid.Column width = {11}>
              <BioDiv 
                {...commonProps}
                commonAnimals={filteredList (bioDiv, animalsFilter, (animal, category) => animal.category.includes(category))}
                endangered={filteredList (endangered, animalsFilter, (animal, category) => animal.category.includes(category))}
                handleFilter={(e, {value}) => handleFilter(e, { value: value, callback: setAnimalsFilter })}
                onClickAnimal={(animal) => handleSelected(animal, selectedAnimals, setSelectedAnimals)}
                onUnClickAnimal={(removedAnimal) => handleDeselect(removedAnimal, selectedAnimals, setSelectedAnimals)}
                setFormValues={setFormValues}
                formValues={formValues}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/my-trips">
            <Grid.Column width = {11}>
              <MyTrips 
                myTrips={myTrips}
              />
            </Grid.Column>
          </Route>
          <Route exact path="/">
            <Grid.Column width = {11}>
              <ParksList
                {...commonProps} 
                parks={filteredList (parks, stateFilter, (park, state) => park.state.includes(state))} 
                onClickPark={handleSelectedPark} 
                handleFilter={(e, {value}) => handleFilter(e, { value: value, callback: setStateFilter })}
              />
            </Grid.Column>
          </Route>
        </Switch>
      </Grid>
      <br />
      <br />
      <Sources/>
    </div>
  );
}

export default App;
