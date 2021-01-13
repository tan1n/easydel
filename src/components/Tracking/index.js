import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

export function Tracking() {

    return (
        <div className="mb-5">
            <Container fluid style={{ backgroundImage: "url('images/home.svg')", height: "500px" }}>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className='mb-5'>
                            <img src="/images/easydel.png" alt="logo" className="img-fluid" />
                        </Col>
                        <Col sm={12} md={6} style={{ background: 'white', borderRadius: "2%", boxShadow: '1px 1px 1px 1px darkgray' }} className='p-3'>
                            <Row className='mb-2'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: 'bold', color: '#ff7900' }}>Sign up as Merchant</Form.Label>
                                        <Form.Control type="text" placeholder="+88-01XXXXXXX" />
                                    </Form.Group>
                                    <Button variant="info" className='btn-block' type="submit" style={{ fontWeight: 'bold' }}>SIGN UP</Button>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: 'bold', color: '#ff7900' }}>Enter your Tracking ID:</Form.Label>
                                        <Form.Control type="text" placeholder="Tracking ID" />
                                    </Form.Group>
                                    <Button variant="info" className='btn btn-block' style={{ fontWeight: 'bold' }}>TRACK</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>

    )
}
