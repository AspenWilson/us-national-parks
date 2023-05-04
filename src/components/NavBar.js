import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='sticky-wrapper-nav'
    style={{
        borderBottom: "4px solid black",
        paddingBottom: "20px",
        marginBottom: "20px",
        paddingTop: '20px'
      }}
      >
      <NavLink 
        style={{padding: '30px'}} 
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink style={{padding: '30px'}}  to="/hikes">
        Hikes
        </NavLink>
        <NavLink style={{padding: '30px'}}  to="/bio-div">
        Bio-Diversity
        </NavLink>
        <NavLink style={{padding: '30px'}}  to="/my-trips">
        My Trips
        </NavLink>
    </div>
  )
}
export default NavBar