import React, { useState,useRef, useEffect } from 'react'
import { Outlet,Link} from 'react-router-dom'
import {Offcanvas, Container,Nav,Navbar} from 'react-bootstrap';


export default function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div className="headPic">
    <div className='headContainer' >
      <img src="./images/pexels-photo-3184193.jpeg" alt="" className="headImg" />
      <div className="logo">
        Alpha Creed
      </div>
      <div className="headnav">
    <nav className="nav">
      <ul className={active}>
        <li className="nav__item">
          {/* <a href="/" className="nav__link"> */}
          <Link to="/">
            Home
            </Link>
          {/* </a> */}
        </li>
        <li className="nav__item">
          {/* <a href="/product" className="nav__link">
            Product
          </a> */}
           <Link to="/product">
            Product
            </Link>
        </li>
        <li className="nav__item">
          {/* <a href="/about" className="nav__link">
            About
          </a> */}
           <Link to="/about">
            About
            </Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav__link">
            Contact
          </a> */}
           <Link to="/contact">
            Contact
            </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </div>


    </div>
      <div className="btnContent">

        Welcome to Alpha Resturant

      </div>
      </div>

     
  )
}
