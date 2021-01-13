import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PickupRequest } from '../components/PickupRequest';
import { History } from '../components/History';
import { ShopSettings } from '../components/Settings';
import LoggedInHeader from '../components/LoggedInHeader';
import Deliveries from '../components/Stats/Deliveries';
import Pending from '../components/Stats/Pending';
import Balance from '../components/Stats/Balance';

export default function Dashboard() {
    return (
        <Container fluid>
            <Container style={{ background: 'white' }}>
                <LoggedInHeader />
                <Row>
                    <Col md={4}><Deliveries /></Col>
                    <Col md={4}><Pending /></Col>
                    <Col md={4}><Balance /></Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={4} sm={12} className='mt-2'><PickupRequest /></Col>
                    <Col md={4} sm={12} className='mt-2'><History /></Col>
                    <Col md={4} sm={12} className='mt-2'><ShopSettings /></Col>
                </Row>
            </Container>
        </Container>
    )
}
