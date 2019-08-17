import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavbarComponent() {
  return(
    <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: purple;
          color: white;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PDI-Pred</Navbar.Brand>
      </Navbar>
    </>
  );
}