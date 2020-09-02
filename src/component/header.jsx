import React, { Component } from 'react';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className="header">
                <Navbar.Brand href="/">
                    <img src="images/logo.svg" className="logo" alt=""/>
                    <span className="logo-text">Digital</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home"><ion-icon name="add-circle-outline"></ion-icon> New</Nav.Link>
                        <Nav.Link href="#link"><ion-icon name="folder-open-outline"></ion-icon> Open</Nav.Link>
                        <NavDropdown title="Thang Ngheo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Billing History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;