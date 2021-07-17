import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button, Spinner } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const MyNav = (props) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    if (user) props.setUID(user.sub);
  }, [isAuthenticated]);

  return (
    <Navbar id="my-nav" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/erenaspire7/image/upload/v1625218726/703e02b53cb97fa45cef8b156e4b0e4a_jw8xc4.jpg"
            className="d-inline-block align-top"
            width="40"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {isLoading ? (
            <Nav.Link>
              <Button variant="outline-light" className="my-button">
                <Spinner size="sm" animation="border" id="my-spinner" />
              </Button>
            </Nav.Link>
          ) : isAuthenticated ? (
            <Nav.Link>
              {}
              <img src={user.picture} width="40" className="d-inline-block " />
              <div className="my-line d-inline-block mx-3"></div>
              <Button
                variant="outline-light"
                className="my-button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Button
                variant="outline-light"
                className="my-button"
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Sign In
              </Button>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
