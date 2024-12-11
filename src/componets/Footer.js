import * as React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3" role="contentinfo">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} Cyber C. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;