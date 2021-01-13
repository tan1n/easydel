import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export function LoginFrom() {
    const history = useHistory();

    return (
        <div>
            <Container className='p-5' style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                minHeight: '100%',
                backgroundColor: 'whitesmoke'
            }}>
                <Row>
                    <Col md={6} className='mb-5'>
                        <img src="/images/easydel.png" className='img-fluid' alt="logo" />
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label style={{ color: '#ff7900', fontWeight: 'bold' }}>Phone Number:</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone no" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: '#ff7900', fontWeight: 'bold' }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="info" onClick={() => history.push('/dashboard')}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}
