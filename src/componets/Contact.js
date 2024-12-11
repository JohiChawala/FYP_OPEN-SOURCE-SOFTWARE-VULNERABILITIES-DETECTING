import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container as="section" className="mt-5" aria-label="Contact Section">
      <Row>
        <Col>
          <h2 className="mb-4">Contact Us</h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="visually-hidden">Name</Form.Label>
              <Form.Control type="text" placeholder="Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="visually-hidden">Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label className="visually-hidden">Message</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Message" required />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Contact Information</h3>
          <p>Email: johichawla14@gmail.com</p>
          <p>Phone: +92 3072411290</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
