import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";


const Login = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form className="p-4 bg-light rounded shadow-sm">
            <h1 className="text-center mb-4">Log In</h1>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label className="visually-hidden">Username or Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username/Email"
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
            <div className="d-grid mb-3">
              <Button variant="success" type="submit">
                Sign In
              </Button>
            </div>
            <a href="#forgot-password" className="text-primary text-decoration-underline">
              Forgot Password?
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
