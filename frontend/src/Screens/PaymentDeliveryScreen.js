import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import NavbarComponent from '../components/NavbarComponent'

import { savePaymentMethod } from '../actions/cartActions'

function DeliveryPaymentScreen() {
    
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorderDelivery')
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
                <h4 style={{marginTop: '35px'}}>Select payment Method</h4>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Col>
                            <Form.Check
                                type='radio'
                                label='PayPal or Credit Card'
                                id='paypal'
                                name='paymentMethod'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                            

                            </Form.Check>
                        </Col>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>
                </Form>
            </FormContainer>
        </div>
    )
}

export default DeliveryPaymentScreen