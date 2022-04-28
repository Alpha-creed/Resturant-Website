import React, { useState } from 'react'

export default function FoodItems({Groceries}) {

  
  return (
    <div className='boxContainer'>
    {Groceries.map((item)=>{
        const {id,title,price,header,img,desc} = item;
        return(
          <div key={id} className='box'>
          <div className="navPic">
          <img src={img} alt={title} className="navImg" />
          </div>
          <div className="navDesc">
              <div className="navTitle">
                  <div className="navFoodName">{title}</div>
                  <div className="navFoodPrice">{price}</div>
              </div>
              <div className="navSub">
              <div className="navFoodHeader">{header}</div>
              <div className="navFoodDesc">{desc}</div>
          </div>
          </div>
          </div>
        )})}
       </div>

   
  )
}
    
