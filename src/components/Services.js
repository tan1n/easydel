import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Services() {
    return (
        <div className="mb-5">
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row className="justify-content-center m-3">
                                <img src="/images/icon-1.png" alt=""></img>
                            </Row>
                            <Row className="justify-content-center">
                                <b>Fastest Delivery</b>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row className="justify-content-center m-3">
                                <img src="/images/icon-2.png" alt=""></img>
                            </Row>
                            <Row className="justify-content-center">
                                <b>Doorstep pickup and delivery</b>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row className="justify-content-center m-3">
                                <img src="/images/icon-3.png" alt=""></img>
                            </Row>
                            <Row className="justify-content-center">
                                <b>Live update</b>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <hr />
        </div >
    )
}
