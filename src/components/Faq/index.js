import React from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import Lorem from '../Lorem'

export function Faq() {
    return (
        <div>
            <Row className='mb-2'>
                <Col className='text-center' style={{ color: '#ff7900' }}><h2><b>F.A.Q</b></h2></Col>
            </Row>
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Inside Chittagong
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><Lorem /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Outside Chittagong
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><Lorem /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </div>
    )
}
