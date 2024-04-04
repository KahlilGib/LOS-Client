import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} LOS </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
