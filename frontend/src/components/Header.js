import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { login, logout } from '../actions/userActions';
import logo from '../logo.png';
import './header.css'
import { BsCart3 } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LoginModal from '../Screens/LoginScreenModal';


function Header() {


    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        
    }
    const itemsInCart = cartItems.reduce((acc, item) => acc + item.qty, 0)

  return (
    <div id='body-div'>
        <Navbar id='header-nav' style={{
            zIndex: "1",
            right:"5px",
            top:"-50px",
            position: "absolute",
            borderColor: "transparent",
            paddingBottom: "20px",
            marginTop: "30px",
            paddingRight: "0px"
            }} collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse   id="responsive-navbar-nav">
                        
                        <Nav >
                        {userInfo && userInfo.isAdmin && (
                    <NavDropdown className='mx-1 list-buttons' title='Admin' id='adminMenu'>

                      <LinkContainer to='/admin/userlist'>
                          <NavDropdown.Item className='list-buttons'>Users</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/admin/productlist'>
                          <NavDropdown.Item className='list-buttons'>Products</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/admin/orderlist'>
                          <NavDropdown.Item className='list-buttons'>Orders</NavDropdown.Item>
                      </LinkContainer>

                    </NavDropdown>
                  )}
                    <Button style={{paddingTop:"5px",position:"relative"}} className='list-buttons' onClick={()=> navigate('/cart')}>
                        <BsCart3 style={{fontSize:"20px",}} /> {cartItems.length ? <p style={{color: "red",position: "absolute", left: "37px",top:"-3px"}} >{itemsInCart}</p> : ''}
                    </Button>
                  
                  {userInfo && (<Button style={{paddingTop:"5px"}}  className='list-buttons'  onClick={()=> navigate('/profile')}> <VscAccount style={{fontSize:"20px",}} /> </Button>)}
                  {!userInfo && (<Button className='list-buttons'  onClick={()=> setIsOpen(true)}>Log-in</Button>)}
                  {userInfo && (<Button className='list-buttons'  style={{color: "rgb(201, 4, 4)"}} onClick={logoutHandler}>Log-out</Button>)}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
        {isOpen && <LoginModal
        openModal = {openModal}
        closeModal = {closeModal}
        />}

        <div id='header-box'>
            <div id="header-div">
                <Link to='/'><img id='logo-img' src={logo} alt="logo" /></Link>
                
                <h1 id='lux-house-text'>Lux-House</h1>
                <h3 id='craft-coffee-text'>Craft Coffee and more...</h3>
            </div>
        </div>
        
        <Nav id='menu-nav' className='navbar' style={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: '30px',  
            fontSize: '19px'
            }}>

        <Nav.Item style={{ margin: '10px', marginLeft: '0px' }}>

            <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>

        </Nav.Item>

        <Nav.Item style={{ margin: '10px' }}> 

            <LinkContainer to='/menu'>
                <Nav.Link>Menu</Nav.Link>
            </LinkContainer>

        </Nav.Item>

        <Nav.Item style={{ margin: '10px' }}>

            <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

        </Nav.Item>
        <Nav.Item style={{ margin: '10px' }}>

            <LinkContainer to='/contact'>
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

        </Nav.Item>
        </Nav>

        

    </div>
  )
}

export default Header