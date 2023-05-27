import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ProductScreen from '../Screens/ProductScreenModal'
import './product.css'

function Product({ product }) {

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className='my-3 p-3 rounded'>
      
      <Card.Body>
          
        <Card.Title as="div">
            <strong style={{fontSize: "20px", fontWeight: "bold", }}>{product.name}</strong>
        </Card.Title>

        <Card.Img style={{
          width: "100%" ,
          maxWidth: "250px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "5%"
          }} src={product.image} />      
      
        <Card.Text as='div'>
            <div className='my-3'>
                <p>{product.description}</p>
            </div>
        </Card.Text>

        <Card.Text as='h3'>
            ${product.price}
        </Card.Text>

       
       <button id='menu-add-btn' onClick={openModal}>add to cart</button>
       {isOpen && <ProductScreen
       product = {product}
       productId = {product._id}
       openModal = {openModal}
       closeModal = {closeModal}
       />}
        

      </Card.Body>
    </Card>
  )
}

export default Product