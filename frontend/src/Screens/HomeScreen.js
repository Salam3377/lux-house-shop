import React from 'react'
import { Image, Container } from 'react-bootstrap'
import Header from '../components/Header'
import './Css/homeScreen.css'

function HomeScreen() {

  return (
    <div>
        <Header />
        
        <div id="main-pic-div">
		    <img id='main-pic' src='https://cdn.mos.cms.futurecdn.net/Zqgq9Dnoutqd2wv7xFqRv8.jpg' alt='main-coffee-shop' />
        </div>
        


        <div id='pics-box-div'>
            <Container className='p-0'>
                <Image className='home-images' src='https://cdn.nofusskitchen.com/wp-content/uploads/2022/01/Restaurant-instagram-captions-7-1024x683.jpg?lossy=1&ssl=1' alt='shop'></Image>
                <Image className='home-images' src='https://s3-media0.fl.yelpcdn.com/bphoto/hUlQhBDO-glkO3ZwOETyvA/o.jpg' alt='shop'></Image>
                <Image  className='home-images' src='https://www.blogto.com/listings/cafes/upload/2015/09/20150902-creedscafe590-10.jpg' alt='shop'></Image>
                <Image  className='home-images' src='https://floridatrippers.com/wp-content/uploads/2021/02/coffee-in-miami-cold-brew-1600x900.jpg' alt='shop'></Image>
                <Image  className='home-images' src='https://cdn.shopify.com/s/files/1/0278/9765/9462/files/coffee-bar-events-img.png?v=3274833284192126514' alt='shop'></Image>
                <Image  className='home-images' src='https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/11/03/Coffee-shops-in-Riyadh.jpg' alt='shop'></Image>
            </Container>
        </div>

    </div>
  )
}

export default HomeScreen