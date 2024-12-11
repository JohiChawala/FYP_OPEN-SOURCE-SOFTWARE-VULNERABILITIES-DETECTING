import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form className="p-4 bg-light rounded shadow-sm">
            <h1 className="text-center mb-4">Sign Up</h1>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="visually-hidden">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="visually-hidden">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="visually-hidden">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label className="visually-hidden">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <div className="d-grid mb-3">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
            <p className="text-center mt-3">
              Already have an account? <a href="./login" className="text-primary text-decoration-underline">Log In</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
