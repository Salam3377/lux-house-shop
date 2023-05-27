import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../actions/userActions'

import Loader from "../components/Loader"
import Message from '../components/Message'


function LoginModal(props) {
    const { closeModal, openModal } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch  = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            closeModal()
        }
    }, [navigate,closeModal, userInfo])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <Container className="justify-content-center">
        <Modal id='sign-in-modal' show={openModal} onHide={closeModal}>
        <Modal.Header id='modal-header' closeButton/>
        <h3 className="modal-header"> Login</h3>
            <Modal.Body>
                {error && <Message variant='danger'>Email or Password is Incorrect</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button id='sign-in-button' variant='primary' type='submit'>
                        Submit
                    </Button>
                    <div className='m-1'>
                        <span>Don't have an account yet? </span>
                        <Link to='/signup'>Create an account</Link>
                    </div>
                    
                    
                </Form>
            </Modal.Body>
        </Modal>
    </Container>
  )
}

export default LoginModal