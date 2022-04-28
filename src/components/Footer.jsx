import React from 'react'
import {FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    const style = {fontSize:"2rem"  ,margin:"10px"}
  return (
    <div className='footerContainer'>
        <div className="foot Address">
            <h1>ADDRESS</h1>
            <p className='titleCenter'> Resturant</p>
            <p>
            Address:P.M.B CT 251CANTONMENTS, Takoradi,Ghana 
            </p>
        </div>
        <div className="foot Reservation">
            <div className=" reseve">
                <h1>RESERVATION</h1>
                <p className='titleCenter'>0261256717</p>
            </div>
            <div className="titleCenter">
            <FaFacebook style={style}/>    
            <FaInstagram style={style}/>
             <FaTwitter style={style}/>
             <FaTwitch style={style}/>
             <FaLinkedin style={style}/> 
              </div>
              <div className="copyright">
                  <div className="">Copyright</div>
                  <FaCopyright style={style}/>
                  <div className="">Frederick </div>
              </div>
        </div>
        <div className="foot hrs">
            <h1>OPEN HOURS</h1>
            <p className='titleCenter'>Monday-Friday 10AM-11AM</p>
            <p className='titleCenter'>Saturday-Sunday 9AM-1AM</p>
        </div>
    </div>
  )
}
