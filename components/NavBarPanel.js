import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";

const NavBarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex ">
          Wise Shop
        </Navbar.Brand>
        <Nav.Link to="/" as={Link}>
          Products
        </Nav.Link>
        <Nav>
          <Navbar.Collapse className="">
            <Navbar.Toggle />
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarPanel;
