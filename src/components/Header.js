import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart4 } from "react-icons/bs";
import React from 'react';




function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./">ONEPICK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Best">BEST </Nav.Link>
            <Nav.Link href="/top">TOP</Nav.Link>
            <Nav.Link href="/pants">PANTS</Nav.Link>
            <Nav.Link href="/shirt">SHIRT</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link href="/board">게시판</Nav.Link>
            <Nav.Link eventKey={2} href="/Basket">
            
              <BsCart4 className="icon" size="20"/></Nav.Link>
              <span>0</span>
              
            <Nav.Link href="/Profile">프로필</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

