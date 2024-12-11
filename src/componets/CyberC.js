import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignInForm } from "./components/SignInForm";
import { CodeAnalyzer } from "./components/CodeAnalyzer";
import { AnalysisResults } from "./components/AnalysisResults";
import { ContactForm } from "./components/ContactForm";

const headerLinks = {
  signin: ["About", "Contact"],
  main: ["About", "Contact", "Sign Out"],
  contact: ["Main Page", "About", "Sign Out"]
};

const mockResults = {
  hasVulnerabilities: true,
  totalLines: 100,
  processingTime: 3.4,
  details: [
    "Line 10: SQL Injection vulnerability detected.",
    "Line 25: Cross-Site Scripting (XSS) vulnerability detected."
  ]
};

export default function CyberC() {
  return (
    <Container as="main" fluid className="bg-white" role="main">
      <Header links={headerLinks.signin} />
      <Row className="my-4">
        <Col>
          <SignInForm />
        </Col>
      </Row>
      <Footer />

      <Header links={headerLinks.main} />
      <Row className="my-4">
        <Col>
          <CodeAnalyzer />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <AnalysisResults results={mockResults} />
        </Col>
      </Row>
      <Footer />

      <Header links={headerLinks.contact} />
      <Row className="my-4">
        <Col>
          <h1 className="mb-4">Using AI to Detect Vulnerabilities in Open-Source Software</h1>
          <p className="mb-4">
            Our tool leverages AI to provide a comprehensive analysis of your code, identifying potential vulnerabilities and offering insights for improvement.
          </p>
          <h2 className="mb-3">How It Works</h2>
          <ul className="ps-4">
            <li className="mb-2">Upload your code.</li>
            <li className="mb-2">Our AI analyzes the code for vulnerabilities.</li>
            <li className="mb-2">Review the results with highlighted vulnerabilities.</li>
          </ul>
        </Col>
      </Row>
      <Footer />

      <Header links={headerLinks.contact} />
      <Row className="my-4">
        <Col>
          <ContactForm />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
