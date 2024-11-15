// Navbar.js

import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const BlogNavbar = ({ onAddBlog }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Blog App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Button variant="outline-light" className="ms-auto" onClick={onAddBlog}>
                        Add Blog
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BlogNavbar;
