import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import Header from '../components/Header'
import './Css/contactUsScreen.css'

function ContactUsScreen() {

	const [showAlert, setShowAlert] = useState(false)
	setTimeout(()=> {
		setShowAlert(false)
	}, 3000)


  const sendEmail = (e) => {
		e.preventDefault();
		setShowAlert(true)
		emailjs.sendForm('service_9vv00dm', 'lux_house', e.target, 'PMOhg-FNFQLZkVJC4')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()

	  };


  return (
    <div style={{position:"relative"}}>
		{showAlert && <Alert style={{
			position:"absolute",
			transform: "translateX(-50%)",
			left: "51%",
			top: "-70px",
			width: "700px",
			height: "60px"
			}} variant='success'>Thank You</Alert>}
        <Header />
        <div id = "top0">
			<div id = "top1">
        	
                	<h2 id ='title'>Contact Us</h2>
                	<p id = 'text'>We love coffee. Reach out and let us know about your experience at Lux-house. 
                If you are seeking to be part of our team,
                please fill out your information below. </p>
			</div>
        	
		</div>
        <div id = "top2">
			<form id='contact-form' onSubmit={sendEmail}>
            	<label className='contact-label'> Your Name</label>
                	<input required className='text-input' type = "text" name = "name" placeholder="your name..." ></input>
            	<label className='contact-label'> Email</label>
                	<input required className='text-input' type = "email" name = "email" placeholder="your email..." ></input>
            	<label className='contact-label'>Message</label>
                	<textarea required className='text-input' name="message" placeholder="message...">
                	</textarea>
            	<input id='contact-submit'  type="submit" value="Submit"></input>
			</form>
		</div>
       
				
		
    </div>
  )
}

export default ContactUsScreen