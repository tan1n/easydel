import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Header() {

    return (
        <div className="mb-5">
            <Container fluid>
                <Container>
                    <Row>
                        <Col md={6}>
                        </Col>
                        <Col md={6} className="text-right">
                            <Button variant="outline-primary">Merchant Login</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <hr />
        </div>
    )
}
