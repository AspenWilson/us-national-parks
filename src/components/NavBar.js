import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div
    style={{
        borderBottom: "4px solid black",
        paddingBottom: "20px",
        marginBottom: "20px",
      }}
      >
      <NavLink 
        style={{ marginRight: "20px" }} 
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink style={{ marginRight: "20px" }}  to="/hikes">
        Hikes
        </NavLink>
        <NavLink style={{ marginRight: "20px" }}  to="/bio-div">
        Bio-Diversity
        </NavLink>
        <NavLink style={{ marginRight: "20px" }}  to="/my-trips">
        My Trips
        </NavLink>
    </div>
  )
}
export default NavBar