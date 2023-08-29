import React from 'react';
import CompanyLogo from '../../assets/CompanyLogo.png';
import './Header.css'; // Import your custom CSS for styling
import { Navbar, Nav, Button} from 'react-bootstrap';
function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" fixed="top">
      <Navbar.Brand href="#home">
        <img className="leading-logo" src={CompanyLogo} alt="Company Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-3">
          <Nav.Item className="navbar-item">
            <Nav.Link href="#product">Product</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Nav.Link href="#templates">Templates</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Nav.Link href="#reviews">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Button variant="outline-primary" className='custom-button-login' href="#login" >LOG IN</Button>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Button variant="primary" className='custom-button-start' href="#start-free">START FREE</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
