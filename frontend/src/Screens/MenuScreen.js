import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector }  from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Product from '../components/Product'
import './Css/menuScreen.css'

import { listProducts } from '../actions/productActions'

function MenuScreen() {

  const dispatch = useDispatch()

  let keyword = useLocation().search 

  const productList = useSelector(state => state.productList)
  const { products } = productList

  let breakfast = []
  let lunch = []
  let coffeeTea = []
  let desserts = []
 
  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  products.forEach(product => {
    if(!product) {
      return
    }
    if (product.category === 'breakfast') {
      breakfast.push(product);
    } else if (product.category === 'lunch') {
      lunch.push(product);
    } else if (product.category === 'coffeeTea') {
      coffeeTea.push(product);
    } else if (product.category === 'desserts') {
      desserts.push(product);
    }
  });

  return (
    <div>
        <Header />

        <div id="menu-img-div">
            <img id="menu-img" src="https://thepointsguy.global.ssl.fastly.net/uk/originals/2021/09/20210930_Mondrian-Shoreditch-Hotel-London-Accor_BSmithson-86.jpg" />
        </div>
        <h1 style={{
          marginTop: "30px",
          paddingBottom: "5px",
          paddingTop: "5px",
          backgroundColor: "black",
          color: "white"
          }}>Menu</h1>
           
        <div>
          <Row>
            <h3 style={{marginTop: "50px", borderTop: "1px solid black", paddingTop: "10px", fontWeight: "bold"}}>Breakfast</h3>
              {breakfast.map(product =>   (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
              ))}

            <h3 style={{marginTop: "50px",paddingTop: "10px", borderTop: "1px solid black", fontWeight: "bold"}}>Lunch</h3>
              {lunch.map(product =>  (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
              ))}

            <h3 style={{marginTop: "50px",paddingTop: "10px", borderTop: "1px solid black", fontWeight: "bold"}}>Coffee and Tea</h3>
              {coffeeTea.map(product =>  (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
              ))}

            <h3 style={{marginTop: "50px",paddingTop: "10px", borderTop: "1px solid black", fontWeight: "bold"}}>Desserts</h3>
              {desserts.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
              ))}  
            
            
           
          </Row>

        </div>
    </div>
  )
}

export default MenuScreen