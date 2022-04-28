import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { RestDesc } from '../components/RestDesc'

export default function About() {
  return (
      <div className="AbtContainer">
                  <h1 className='titleCenter'>About Us</h1>
<div className="underline abtU"></div>
    <div className='About'>
        <div className="imgs">
        <div className="firstImg">
            <img src="./images/pexels-photo-70497.jpeg" alt="" className='abtImg' />
        </div>
        <div className="secondImg">
        <img src="./images/pexels-photo-265940.webp" alt="" className='abtImg'/>
        </div>

        </div>
      <div className="aboutDesc">
          <RestDesc/>
          <Link to="/product">
          <Button name={`Make Your Order`}/>
          </Link>
      </div>
    </div>
    </div>
  )
}
