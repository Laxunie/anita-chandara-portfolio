import React from 'react'
import initials  from '../../assets/images/initialsW.png'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import middle from '../../assets/images/left2.png'
import {Navbar} from '../../components'
import './landing.css'

const Landing = () => {
  return (
    <div className='app__landing'>
      <div className="app__home">
        <h1>Anita<br/>Chandara</h1>
        <img className='app__home-img' src={initials}/>
        <div> 
            <span>Love By Design<br/>2022</span>
            <a href='/love-by-design'><img src={left}/></a>
        </div>
        <div>
            <span>Ordinary Angels<br/>2022</span>
            <a href='/ordinary-angels'><img src={right}/></a>
        </div>
      </div>
    </div>
  )
}

export default Landing