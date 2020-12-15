import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function CalculatePricing() {
    return (
        <div className="mb-5">
            <Container fluid>
                <Container>
                    <Row>
                        <Col md={6} className="mt-5">
                            <h4>Check our pricing</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Parcel Weight</Form.Label>
                                    <Form.Control type="text" placeholder="Weight" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Delivery Location</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Button variant="primary" className="btn-block" type="submit">
                                    Get pricing
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6} xs={0} className="hidden-xs hidden-sm">
                            <img src="/images/delivery.png" className="img-fluid" height="160px" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
