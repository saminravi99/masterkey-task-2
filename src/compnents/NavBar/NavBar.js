import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo_bn.png"
import "./NavBar.css"

const NavBar = () => {
    return (
      <div className='mt-lg-3'>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <NavLink to="/">
              <img className="nav-logo" src={logo} alt="logo" />
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active-link mx-1 mt-lg-0 mt-3 `
                      : `inactive-link mx-1 mt-lg-0 mt-3`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active-link mx-1 mt-lg-0 mt-3`
                      : `inactive-link mx-1 mt-lg-0 mt-3`
                  }
                  to="/products"
                >
                  Products & Services
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active-link mx-1 mt-lg-0 mt-3`
                      : `inactive-link mx-1 mt-lg-0 mt-3`
                  }
                  to="/client"
                >
                  Become a Client
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active-link mx-1 mt-lg-0 mt-3`
                      : `inactive-link mx-1 mt-lg-0 mt-3`
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </Nav>
              <Nav>
                <button className="btn btn-success">Login / Sign Up</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavBar;