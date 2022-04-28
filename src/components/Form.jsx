import React, { useState } from 'react'
import { Button } from './Button'

export default function Form() {
    const [chkEmpty,setChkEmpty] = useState(true)
    const [input,setInput] = useState({})
    const [error,setError] = useState({})

    const handleChange = (e) =>{
        let inputAns = input
        inputAns[e.target.name] = e.target.value
        setInput(inputAns)
    }

    const handleValid =(e)=>{
        e.preventDefault()
        if(validate()){
            console.log(input,chkEmpty,error)
            let inputAns = {}
            inputAns['name'] = '';
            inputAns['email'] = '';
            inputAns["Subject"] = "";
            inputAns['message'] ="";
            setInput(inputAns)
            // setChkEmpty(!chkEmpty)
           
        }

    }

    const validate = ()=>{
        let inputAns=input
        if(!inputAns['name']){
            setChkEmpty(!chkEmpty)
            error['name'] ='Please Enter Your name'
        }

        if(!inputAns["email"]){
            setChkEmpty(!chkEmpty)
            error["email"] = "Please enter your email address"
        }
        if(!inputAns["subject"]){
            setChkEmpty(!chkEmpty)
            error["subject"] = "Please discuss a subject"
        }
        if(!inputAns["message"]){
            setChkEmpty(!chkEmpty)
            error["message"] = "The message textarea cant be empty"
        }
       
        setError(error)
        return chkEmpty
    }
  return (
    <div>
      <h1>GET IN TOUCH</h1>
      <div className="underline"></div>
        <p>You have to place a piece of advice or a suggestion that you would like to share with us?Feel free to contact us</p>
        <form onSubmit={handleValid}>
            <div className="formContent">
            <label htmlFor="name">
                Name
            </label>
            <div className="input">
            <input type="text"  value={input.name} name='name' onChange={handleChange} placeholder='Enter your name' />
            </div>
            <div className={`${chkEmpty?'noMess':'message'}`}>{error.name}</div>
            </div>
            <div className="formContent">
            <label htmlFor="Email">
                Email
            </label>
            <div className="input">
            <input type="Email" value={input.email} name='email' onChange={handleChange} placeholder='Enter your email address' />
            </div>
            <div className={`${chkEmpty?'noMess':'message'}`}>{error.email}</div>
            </div>
            <div className="formContent">
            <label htmlFor="Subject">
                Subject
            </label>
            <div className="input">
            <input type="text" name='subject' value={input.subject} onChange={handleChange} placeholder='Enter the subject' />
            </div>
            <div className={`${chkEmpty?'noMess':'message'}`}>{error.subject}</div>
            </div>
            <div className="formContent">
            <label htmlFor="Message">
                Message
            </label>
            <div className="">
                <textarea name="message" value={input.message} id="" onChange={handleChange} cols="60" rows="20"></textarea>
                </div>
                <div className={`${chkEmpty?'noMess':'message'}`}>{error.message}</div>
                </div>
                <div className="messBtn">
                <Button  name={'Message'}/>
                </div>
        </form>
    </div>
  )
}
