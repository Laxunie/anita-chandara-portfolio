import React from 'react'
import './navbar.css'
import logo from '../../assets/images/initialsW.png'

const navbar = () => {
  return (
    <div className="app__navbar">
      <img src={logo} alt={logo}/>
      <div className="app__navbar-links">
        <ul>
          <span>
            <li>Resume</li>
            <div></div>
          </span>
          <span>
            <li>Contact</li>
            <div></div>
          </span>
        </ul>
      </div>
    </div>
  )
}

export default navbar