import React from 'react'
import picture from '../aboutUs.jpg'
import './Css/aboutUsScreen.css'
import Header from '../components/Header'

function AboutUsScreen() {
  return (
    <div>
        <Header />
        <div className="about-us-container">

          
            <img id='about-img' src={picture} alt='about-coffee-shop'/>
          

            <div className="about-us">
                <h3>Established in 2022</h3>
                <p>A vision to create a company that brings together the best products from 
                various cultures around the world and apply the finer details to make them even better.
                Details such as consistent product quality, exceptional customer service,
                and a nurturing environment were added to the equation that encompasses the culture of Lux.
                Our goal at Lux is simple, to be the change in everything that we do, from our culture
                of care to the quality of our products, and to how we can better serve our communities.
                </p>
            </div>

        </div>


    </div>
  )
}

export default AboutUsScreen