import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function LoggedInHeader() {
    const history = useHistory();
    return (
        <div>
            <Row className='mt-2 mb-2'>
                <Col md={{ span: 6, offset: 6 }} className='text-right'>
                    <Button variant='outline-info' onClick={() => history.push('/')}>Logout</Button>
                </Col>
            </Row>
            <hr />
        </div>
    )
}
