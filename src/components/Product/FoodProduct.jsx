import React, { useState } from 'react'
import { products } from '../../data'
import FoodItems from './FoodStuffs/FoodItems'
import FoodNav from './FoodStuffs/FoodNav'

const AllFoodProduct = ['All',...new Set(products.map((item)=>item.category))]

export default function FoodProduct() {
    const [foodStuffs,setFoodStuff] = useState(products)
    const [foodNav,setFoodNav] = useState(AllFoodProduct)

   

    const filter = (nav) =>{
        if(nav === "All"){
            setFoodStuff(products)
            return;
        }
        const otherOptions=products.filter((item)=>item.category === nav)
        setFoodStuff(otherOptions)
    }
  return (
    <div className="prodContainer">
        <h2 className='menu'>Our Menu</h2>
        <p className='menu'>
        Je em eleonora gefallen gegenden feinsten in ei konntest. Em speisen fremden sa mi mundart im hochmut heimweh achtete. <br/>Bekannten gepfiffen stuckchen         </p>
        <div className="product">
            <div className="categories">
            <FoodNav navOptions={foodNav} navSelect={filter}/>
            </div>
            <div className="items">
            <FoodItems  Groceries={foodStuffs} />
            </div>
        </div>
    </div>
  )
}
