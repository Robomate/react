import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 50px;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="sm" >
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand>
          <Link to={"/components/home"} className="nav-link"> NavBar </Link>
        </Navbar.Brand> 
        <Nav className="mr-auto">
          <Link to={"/components/home"} className="nav-link"> Home </Link>
          <Link to={"/components/about"} className="nav-link"> About </Link>
          <Link to={"/components/contact"} className="nav-link"> Contact </Link>
          <Link to={"/components/info"} className="nav-link"> Info </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
