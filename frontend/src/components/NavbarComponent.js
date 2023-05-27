import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import logo from '../logo.png';

function NavbarComponent() {
  const navigate = useNavigate()
  return (
    <Navbar style={{borderColor: "transparent",marginTop:"30px", marginBottom: "70px"}} collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate(-1)} style={{color: "black"}} ><AiOutlineArrowLeft style={{fontSize: "25px",paddingBottom: "4px",}} /> Back</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=> navigate('/')} style={{trasform: "translateX(-50%)",left: "47%", position: "absolute", paddingTop: "0px",top:"10px"}}><img style={{height: "70px"}} src={logo} alt="logo" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;