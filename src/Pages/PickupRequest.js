import React from 'react'
import { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import BackButton from '../components/BackButton'
import LoggedInHeader from '../components/LoggedInHeader'
import ProductInfo from '../components/PickupRequest/ProductInfo'

export default function PickupRequest() {

    const [productCount, setProductCount] = useState(1);

    const renderProductList = () => {
        let productList = []
        for (let i = 0; i < productCount; i++) {
            productList.push(<ProductInfo />)
        }
        return productList
    }

    const titleStyle = {
        color: '#ff7900',
        fontWeight: 'bold'
    }

    const [reciever, setReciver] = useState({ name: '', phone: '' });

    const [address, setAddress] = useState({ city: '', location: '' });

    const [products, setProducts] = useState([]);

    const [delivery, setDelivery] = useState({ delivery_type: '' });

    return (
        <Container fluid >
            <Container className=''>
                <LoggedInHeader />
                <BackButton />
                <div className='card p-5 mt-2'>
                    <Row className='mt-5'>
                        <Col><h5 style={titleStyle}>1.Recievers Information</h5></Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col md={6}>
                            <Form.Group>
                                <label>Name</label>
                                <Form.Control type='text' onChange={e => setReciver(prev => ({ ...prev, name: e.target.value }))} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <label>Phone Number</label>
                                <Form.Control type='text' placeholder='+8801-XXXXXXX' onChange={e => setReciver(prev => ({ ...prev, phone: e.target.value }))} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <label>City</label>
                                <Form.Control as='select' onChange={e => setAddress(prev => ({ ...prev, city: e.target.value }))}>
                                    <option>Select a city</option>
                                    <option>Chittagong</option>
                                    <option>Dhaka</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <label>Full Address</label>
                                <Form.Control as='textarea' rows={2} onChange={e => setAddress(prev => ({ ...prev, location: e.target.value }))} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col><h5 style={titleStyle}>2.Product Information</h5></Col>
                    </Row>
                    {renderProductList()}
                    <Row className='justify-content-center'>
                        <Button variant='outline-info' onClick={() => { setProductCount(productCount + 1) }}>+</Button>
                    </Row>
                    <Row className='mt-2'>
                        <Col><h5 style={titleStyle}>3.Delivery Pricing</h5></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <label>Delivery Option</label>
                                <Form.Control as='select' onChange={e => setDelivery(prev => ({ ...prev, delivery_type: e.target.value }))}>
                                    <option>Select delivery method</option>
                                    <option>General</option>
                                    <option>Express</option>
                                    <option>Super Express</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <label>Total</label>
                                <h3></h3>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={12} sm={12}><Button variant='info' style={{ fontWeight: 'bold' }} > Confirm</Button></Col>
                    </Row>
                </div>
            </Container>
        </Container >
    )
}
