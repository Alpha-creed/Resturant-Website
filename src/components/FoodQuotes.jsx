import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { foodDesign } from '../data'

// var caro = require("react-responsive-carousel").Carousel

// export default function FoodQuotes() {
//     const [design,setDesign] = useState(foodDesign)
//     const [index,setIndex] = useState(0)

//     useEffect(()=>{
//         let lastIndex = design.length - 1;
//         // console.log("hi")
//         if(index <0){
//             setIndex(lastIndex)
//         }
//         if(index >lastIndex){
//             setIndex(0)
//         }
        
//     },[index,design])
//     useEffect(()=>{
//         let slide = setInterval(()=>{
//             setIndex(index+1)
//         },1000)
//         return()=>{
//             clearInterval(slide)
//         }
//     },[index])

//   return (
//    <section>
//        <div className="container">
//        {design.map((item,Itemindex)=>{
//            const {id,name,Quote,img} = item;
//             let position ='next'
//            if(Itemindex === index){
//                position ="active"
//            } 
//            if(Itemindex === index-1||index == 0 &&  Itemindex=== design.length-1){
//                position ="last"
//            }
//            return(
//            <article className={position} key={id}>
//                <img src={img} alt={name} className="img"/>
//                <div className="textImg">
//                <div className="quote">{Quote}</div>
//                 <div className="name">{name}</div>
//                 </div>
//            </article>
//            )
//        })}
//        </div>
      
//    </section>
//   )
// }
function FoodQuotes() {
    const [peop,setPeop] = useState(foodDesign)
    const [index,setIndex] = useState(0)
  
    useEffect(() =>{
      const lastIndex = peop.length -1;
      if(index <0){
        setIndex(lastIndex)
      }
      if(index >lastIndex){
        setIndex(0)
      }
    }, [index, peop])
  
    useEffect(()=>{
      let slider = setInterval(()=>{
        setIndex(index + 1);
      },5000);
      return ()=>{
        clearInterval(slider)
      } 
    }, [index]);
  
    return (
      <section className="section">
        <div className="section-center">
          {peop.map((item,personIndex)=>{
           const {id,name,Quote,img} = item;
  
            let pos = "nextSlide";
            if(personIndex === index){
              pos = "activeSilde";
            }
            if(personIndex === index -1 ||
               (index === 0 && personIndex === peop.length -1)){
              pos ="lastSlide";
            }
  
            return(
              <article className={pos} key={id}>
                <img src={img} alt={name} className="person-img" />
                <p className='text'>{Quote}</p>
                {/* <p className="title">{name}</p> */}
                <p className="text">{name}</p>
                Q
              </article>
            )
          })}
        </div>
      </section>
      );
  }
  
  export default FoodQuotes;