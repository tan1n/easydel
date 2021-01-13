import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import LoginButton from './LoginButton';

export function Header() {

    return (
        <div className='mt-2 mb-5'>
            <Row>
                <Col md={{ span: 6, offset: 6 }} className="text-right">
                    <LoginButton />
                </Col>
            </Row>
            <hr />
        </div>

    )
}
