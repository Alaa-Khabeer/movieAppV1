import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nbar() {
  const fav = useSelector((state)=>state.counter)
    return (
       <Navbar bg="dark" expand="lg" className='mb-5'>
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className='text-warning'>Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                 <Nav.Link as={Link} to="/home" className='text-light'>Home</Nav.Link>
                <Nav.Link as={Link} to="/login" className='text-light'>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup" className='text-light'>Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/favorite" className='text-warning position-relative'>
                  <i className="fa-regular fa-heart fs-4"></i>
                <span className="position-absolute top-0 start-50 translate-middle badge text-warning">
                {fav}
                </span>
                </Nav.Link>
              </Nav>
    
              <Form className="d-flex me-5">
                <Form.Control
                  type="search"
                  placeholder="Wirte movie name"
                  className="me-2"
                  aria-label="Search"/>
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Nbar;