
import React from 'react'
import Form from '../components/Form'
import Info from '../components/Info'

export default function Contact() {
  return (
    <div className="contact">
            <h1 className='titleCenter'>Contact Us</h1>
    <div className='contactContainer'>
        <div className="form">
            <Form/>
            </div>
        
        <div className="Info"><Info/></div>
    </div>
    </div>
  )
}
