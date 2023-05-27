import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

import { saveDeliveryAddress } from '../actions/cartActions'
import NavbarComponent from '../components/NavbarComponent'

function AddressScreen() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { deliveryAddress } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [address, setAddress] = useState(deliveryAddress.address)
    const [city, setCity] = useState(deliveryAddress.city)
    const [postalCode, setPostalCode] = useState(deliveryAddress.postalCode)
  
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveDeliveryAddress({ address, city, postalCode }))
        navigate(`/paymentDelivery`)
    }
    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        if(!userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    return (
        <div>
            <NavbarComponent />
        <FormContainer>
            <Form onSubmit={submitHandler}>
               
                <h4 style={{marginTop: '35px'}}>Delivery Address</h4>
                <Form.Group controlId='address'>
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                      required
                      type='text'
                      placeholder='Enter address'
                      value={address ? address : ''}
                      onChange={(e) => setAddress(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

              <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                      required
                      type='text'
                      placeholder='Enter city'
                      value={city ? city : ''}
                      onChange={(e) => setCity(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

              <Form.Group controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                      required
                      type='text'
                      placeholder='Enter postal code'
                      value={postalCode ? postalCode : ''}
                      onChange={(e) => setPostalCode(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
        </div>
    )
}

export default AddressScreen