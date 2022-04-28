import React from 'react'
import SampleFood from '../components/Product/SampleFood'
import { RestDesc } from '../components/RestDesc'
import { sample } from '../data'

export default function Home() {
  return (
    <div className='HomeContainer'>
      <h1 className='titleCenter'>Welcome to Our Resturant</h1>
      <div className="homeMenu">
        <h3 className='titleCenter'>We Offer</h3>
        <div className="">
        <SampleFood Samp={sample}/> 
        </div>
      </div>
      <h3 className="titleCenter">Description of Our Resturant</h3>
      <div className="home">
          <div className="homeDesc">
          <RestDesc/>
          </div>
          <div className="homePic">
              <img className='homePic' src="./images/pexels-photo-1395967.jpeg" alt="" />
          </div>
      </div>
      
    </div>
  )
}
