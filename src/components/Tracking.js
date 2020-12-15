import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

export default function Tracking() {
    const styles = {
        height: "480px",
        backgroundImage: "url('https://redx.com.bd/images/revamp/Redx-illustration-landing.svg')"
    }
    return (
        <div className="mb-5">
            <Container fluid style={styles}>
                <Container>
                    <Row>
                        <Col className="p-5">
                            <img src="/images/easydel.png" alt="logo" className="img-fluid" />
                        </Col>
                        <Col md={6} className="p-3" style={{ backgroundColor: "white", borderRadius: "5%" }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Sign up as Merchant</Form.Label>
                                    <Form.Control type="text" placeholder="Phone number" />
                                </Form.Group>
                                <Button variant="primary" className="btn-block" type="submit">
                                    Sign up
                                </Button>
                            </Form>
                            <br />
                            <Form>
                                <Form.Group>
                                    <Form.Label>Enter your Tracking ID:</Form.Label>
                                    <Form.Control type="text" placeholder="Tracking ID" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Track
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
