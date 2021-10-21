import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth';


// const loginIcon = <FontAwesomeIcon icon={faCoffee} />

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h2>Tanha Health Care</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-light" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/contact">Contact Us</Nav.Link>
                        <Navbar.Text>
                            <a href="#login" className="text-danger">{user.displayName}</a>
                        </Navbar.Text>
                        {
                            user.email ?
                                <button className="btn btn-danger ms-3" onClick={logOut}>Log out</button> :
                                <Nav.Link as={Link} className="text-light" to="/login"><i class="fas fa-camera"></i>Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;