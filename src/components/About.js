import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Lorem from './Lorem'

export default function About() {
    return (
        <div className="mb-5">
            <Container fluid >
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/150/200"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/150/200"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/150/200"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Why us</h2>
                            <Lorem />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
