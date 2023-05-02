import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div
    style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
      >
      <NavLink 
        style={{ marginRight: "10px" }} 
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }}  to="/hikes">
        Hikes
        </NavLink>
        <NavLink style={{ marginRight: "10px" }}  to="/bio-div">
        Bio-Diversity
        </NavLink>
        <NavLink style={{ marginRight: "10px" }}  to="/my-trips">
        My Trips
        </NavLink>
    </div>
  )
}
export default NavBar