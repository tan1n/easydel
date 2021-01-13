import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export function CalculatePricing() {
    return (
        <div>
            <Row>
                <Col md={6} className="mt-5">
                    <h4 style={{ fontWeight: 'bold', color: '#ff7900' }}>Check our pricing</h4>
                    <Form.Group>
                        <Form.Label>Parcel Type</Form.Label>
                        <Form.Control as="select">

                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Parcel Weight (in kg)</Form.Label>
                        <Form.Control type="text" placeholder="Weight" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Delivery Location</Form.Label>
                        <Form.Control as="select">
                            <option>Select a delivery location</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="info" className="btn-block" style={{ fontWeight: 'bold' }} type="submit">Get pricing</Button>
                </Col>
                <Col md={6} xs={0}>
                    <img src="/images/delivery.png" className="img-fluid" height="160px" alt="" />
                </Col>
            </Row>
        </div>
    )
}
