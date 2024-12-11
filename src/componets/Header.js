import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Image from '../assets/android-chrome-512x512.png'

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };


  return (
    <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect expand="lg" className="bg-dark" style={{ overflowX: 'hidden' }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" onClick={handleNavLinkClick}>
            <img src={Image} alt='Logo' className='logo'></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className={`nav-link ${hoveredLink === 'about' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-link ${hoveredLink === 'contact' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/login" className={`nav-link ${hoveredLink === 'login' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('login')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className={`nav-link ${hoveredLink === 'signup' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('signup')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
