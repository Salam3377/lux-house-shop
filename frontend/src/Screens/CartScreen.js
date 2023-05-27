import React, { useEffect, useState } from 'react'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import LoginModal from '../Screens/LoginScreenModal';
import NavbarComponent from '../components/NavbarComponent'


function CartScreen() {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

  const productId = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const qtyOptions = [1,2,3,4,5,6,7,8,9]

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const goBack = () => {
      navigate(-1)
  }

  useEffect(() => {
    if(productId.id) {
        dispatch(addToCart(productId.id, qty))
        navigate('/menu')
    }
}, [dispatch, productId.id, qty])

const removeFromCartHandler =(id) => {
    dispatch(removeFromCart(id))
}

const delivery = () => {
    if(!userInfo) {
        openModal()
    }
    else {
        navigate(`/address`)
    }
}
  return (
    
    <div>
        <NavbarComponent />
        {isOpen && <LoginModal
        openModal = {openModal}
        closeModal = {closeModal}
        />}
        
        <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message variant='info'>
                    Your cart is empty <Link to='/menu'>Go To Menu</Link>
                </Message>
            ) : (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} fluid rounded />
                                </Col>

                                <Col md={2}>
                                    {item.name}
                                </Col>

                                <Col md={2}>
                                    ${item.price}
                                </Col>

                                <Col md={3}>
                                    <Form.Control
                                    as='select'
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                    >
                                    {qtyOptions.map(x => (
                                        <option key={x}>{x}</option>
                                    ))}
                                    </Form.Control>
                                </Col>

                                <Col md={1}>
                                    <Button
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHandler(item.product)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </Button>                             
                                </Col>

                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )
        }
        </Col>

        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup.Item>

                    <Button
                    type='button'
                    className='col-5 m-1'
                    disabled={cartItems.length === 0}
                    onClick={delivery}
                    >
                        Delivery
                    </Button>
                </ListGroup.Item>
            </Card>
        </Col>
    </Row>
    </div>
  )
}

export default CartScreen



