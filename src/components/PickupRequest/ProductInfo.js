import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function ProductInfo() {
    return (
        <Row className='mt-2'>
            <Col md={3}>
                <Form.Group>
                    <label>Name</label>
                    <Form.Control type='text' />
                </Form.Group>
            </Col>
            <Col md={3}>
                <Form.Group>
                    <label>Type</label>
                    <Form.Control as='select'>
                        <option>Clothing</option>
                        <option>Food(Cake)</option>
                        <option>Food(others)</option>
                        <option>Gadget</option>
                        <option>Fragile Item (Glass,Egg)</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col md={3}>
                <Form.Group>
                    <label>Total Weight</label>
                    <Form.Control type='text' />
                </Form.Group>
            </Col>
        </Row>
    )
}
