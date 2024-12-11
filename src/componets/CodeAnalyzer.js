import * as React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const CodeAnalyzer = () => {
  return (
    <Container as="section" className="mt-5" aria-label="Code Analysis Section">
      <Row>
        <Col>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="codeInput" className="mb-3">
              <Form.Label className="visually-hidden">Code Input</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Paste your code here."
                aria-label="Code input area"
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-3">
              Run
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <div role="status" aria-live="polite" className="text-muted">
            Analyzing... (XX seconds elapsed)
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CodeAnalyzer;
