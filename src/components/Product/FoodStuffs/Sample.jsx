import React from 'react'

export const Sample = ({title,img,price,desc})=>{
    return(
    <div className="sampContainer">
        <div className="sampPic">
            <img src={img} alt={title} className="sampImg" />
        </div>
        <div className="sampDesc">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="sampPrice">${price}</div>
        </div>
    </div>)
} 

// export const Sample=()=> {
//   return (
//     <div>
//     <div className="sampContainer">
//      <div className="sampPic">
//              <img src='../821092.png'alt='title' className="sampImg" />
//          </div>
//          <div className="sampDesc">
//              <h3>title</h3>
//              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet iste laboriosam fugiat nesciunt ratione cumque </p>
//              <div className="sampPrice">$price</div>
//          </div>
//      </div>
//     </div>
//   )
// }
