import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useAuth } from "../../utils/hooks/useAuth";
import Avatar from "react-avatar";

export const Header = () => {
  const { currentUser, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Emp. M. System</Navbar.Brand>
        {currentUser && (
          <Nav className="me-auto">
            <Nav.Link href="/home">Profile</Nav.Link>
            <Nav.Link href="#features">Employees</Nav.Link>
            <Nav.Link href="#pricing">Settings</Nav.Link>
          </Nav>
        )}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" onClick={logout}>
          {currentUser && (
            <Navbar.Text>
              <Avatar
                textSizeRatio={1}
                name={currentUser.username}
                size="30"
                round
              />
              {/* <a href="#login">{currentUser.username}</a> */}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
