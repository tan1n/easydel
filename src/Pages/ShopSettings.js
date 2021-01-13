import React from 'react'
import { Container, Col, Row, FormLabel, FormControl, FormGroup, Button } from 'react-bootstrap'
import BackButton from '../components/BackButton'
import LoggedInHeader from '../components/LoggedInHeader'

export default function ShopSettings() {

    const titleStyle = {
        color: '#ff7900',
        fontWeight: 'bold'
    }

    return (
        <Container fluid>
            <Container>
                <LoggedInHeader />
                <BackButton />
                <div className='card p-5 mt-2'>
                    <Row>
                        <Col md={12}>
                            <h5 style={titleStyle}>1.Business Information</h5>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Business name</FormLabel>
                                <FormControl type='text' />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Business Category</FormLabel>
                                <FormControl as='select'>
                                    <option>Tech</option>
                                    <option>Clothing</option>
                                    <option>Gadget</option>
                                    <option>Service</option>
                                    <option>Others</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Business Address</FormLabel>
                                <FormControl as='textarea' />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>City</FormLabel>
                                <FormControl as='select'>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <h5 style={titleStyle}>2.Profile Information</h5>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Owner's name</FormLabel>
                                <FormControl type='text' />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl type='text' />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <h5 style={titleStyle}>3.Pickup Information</h5>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Pickup city</FormLabel>
                                <FormControl as='select'>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Pickup address</FormLabel>
                                <FormControl as='textarea' />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <Button variant='info'>Save</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    )
}
