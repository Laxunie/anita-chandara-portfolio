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
        <div className='app__love-grids'>
          <div className='app__love-image-grid-1'>
              <img src={images.picture1}/>
              <img src={images.picture5}/>
              <img src={images.picture3}/>
              <img src={images.picture2}/>
          </div>
          <div className='app__love-image-grid-2'>
              <img src={images.picture3}/>
              <img src={images.picture1}/>
              <img src={images.picture6}/>
              <img src={images.picture4}/>
          </div>
          <div className='app__love-image-grid-3'>
              <img src={images.picture7}/>
              <img src={images.picture3}/>
              <img src={images.picture2}/>
              <img src={images.picture5}/>
          </div>
        </div>
    </div>
  )
}

export default Love