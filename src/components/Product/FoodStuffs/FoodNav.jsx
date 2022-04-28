import React from 'react'

export default function FoodNav({navOptions,navSelect}) {
  return (
    <div className='navTabContainer'>
       { navOptions.map((option,index)=>{
           return(
        <button className="btn" key={index} onClick={()=>navSelect(option)}>
        {option}
    </button>
           );
       })}
    </div>
  )
}
