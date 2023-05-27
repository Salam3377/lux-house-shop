import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

function Footer() {
  return (
        <footer>
            <Container>
                <Row className='justify-content-center'>
                    <Col style={{textAlign: 'center'}}>Copyright &copy; Lux-House</Col>
                </Row>
            </Container>
        </footer>
  )
}

export default Footer