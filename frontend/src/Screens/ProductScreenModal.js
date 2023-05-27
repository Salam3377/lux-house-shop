import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Container, Modal, Image, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


import Loader from "../components/Loader"
import Message from '../components/Message'


function ProductScreen(props) {
  const { closeModal, openModal, productId, product } = props

  const [isOpen, setIsOpen] = useState(false)

  const qtyOptions = [1,2,3,4,5,6,7,8,9]

  const [qty, setQty] = useState(1)

  let navigate = useNavigate()


  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`)
    
    closeModal()
}

  return (
    <Container className="justify-content-center">
        <Modal id='sign-in-modal' show={openModal} onHide={closeModal}>
        <Modal.Header id='modal-header' closeButton/>
        <h5 className="modal-header">quantity</h5>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
            <Modal.Body>
               
                <Modal.Title as='div'><strong> {product.name} </strong></Modal.Title>
                <Image style={{
                    width: "100%" ,
                    maxWidth: "200px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "5%"
                }}
                src={product.image} />
                <p>price: ${product.price}</p>
                <Form onSubmit={addToCartHandler}>
                    <p style={{marginTop: "15px", marginBottom: "5px"}}>Update Quantity: </p>
                   <Form.Control className=''
                    as='select'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    >
                    {qtyOptions.map(x => (
                        <option key={x}>{x}</option>
                    ))}
                </Form.Control>

                    <Button className='mt-2' size='md' id='sign-in-button' variant='primary' type='submit'>
                        Add
                    </Button>
                    
                    
                </Form>
            </Modal.Body>
        </Modal>
    </Container>
  )
}

export default ProductScreen