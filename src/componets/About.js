import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      {/* Main heading */}
      <Row>
        <Col>
          <h1 className="text-center">About</h1>
        </Col>
      </Row>

      {/* Using AI to Detect Vulnerabilities in Open-Source Software */}
      <Row className="mt-4">
        <Col>
          <h2>Using AI to Detect Vulnerabilities in Open-Source Software</h2>
          <p>
            Our tool leverages cutting-edge AI technology to provide a comprehensive analysis of your code. It identifies potential vulnerabilities and offers actionable insights for improvement, making your software more secure and reliable.
          </p>
        </Col>
      </Row>

      {/* How It Works Section */}
      <Row className="mt-5">
        <Col>
          <h3>How It Works</h3>
          <ul>
            <li><strong>Upload Your Code:</strong> Start by uploading your source code to our platform.</li>
            <li><strong>AI-Powered Analysis:</strong> Our AI scans your code for potential vulnerabilities and flags areas that require attention.</li>
            <li><strong>Detailed Results:</strong> Review a detailed report with highlighted vulnerabilities and recommendations for remediation.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

