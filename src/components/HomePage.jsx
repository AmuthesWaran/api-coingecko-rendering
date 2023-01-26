import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const simpleTable = () => {
    navigate('/simple-table')
  }

  const reactDTC = () => {
    navigate('/react-data-tables')
  }

  const cardView = () => {
    navigate('/card-view')
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={simpleTable} >Coingecko Api Rendering</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link onClick={goHome} >Home</Nav.Link> */}
              <Nav.Link onClick={simpleTable} >Simple Table</Nav.Link>
              <Nav.Link onClick={reactDTC} >React Data Table Component</Nav.Link>
              <Nav.Link onClick={cardView} >Card View</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default HomePage
