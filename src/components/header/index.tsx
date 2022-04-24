import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Emp. M. System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Profile</Nav.Link>
          <Nav.Link href="#features">Employees</Nav.Link>
          <Nav.Link href="#pricing">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
