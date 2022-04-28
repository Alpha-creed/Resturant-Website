import React from 'react'
import { sample } from "../../data"
import SampleFood from './SampleFood'

export default function SampleCover() {
  return (
      <div >
          <h2 className='sampTitle'>Our popular Dishes</h2>
        <p className='sampText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ratione, id possimus quo fugiat consectetur non <br/>debitis molestiae officia laborum aut, sunt, laboriosam in quod delectus ea animi consequatur porro!</p>
        <div >
            <SampleFood Samp={sample}/> 
        </div>
      </div>
   
  )
}
