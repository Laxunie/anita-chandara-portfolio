import React from 'react'
// import cover from '../../assets/images/love-by-design-cover.png'
// import image from '../../assets/images/left.png'
import {images} from '../../assets'
import './love.css'

const Love = () => {
  return (
    <div className='app__love'>
        <div className='app__love-cover'>
            <h1>Love By Design <br/> 2022</h1>
        </div>
        <div class="app__love-grids">
          <div class="app__love-grids-grid">
              <img src="./images/pic1.png" alt="pic1"/>
              <img src="./images/pic3.png" alt="pic1"/>
              <img src="./images/pic4.png" alt="pic1"/>
              <img src="./images/pic12.png" alt="pic1"/>

          </div>
          <div class="app__love-grids-grid">
              <img src="./images/pic2.png" alt="pic1"/>
              <img src="./images/pic10.png" alt="pic1"/>
              <img src="./images/pic11.png" alt="pic1"/>
          </div>
          <div class="app__love-grids-grid">
              <img src="./images/pic9.png" alt="pic1"/>
              <img src="./images/pic1.png" alt="pic1"/>
          </div>
    </div>
    </div>
  )
}

export default Love