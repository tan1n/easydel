import React from 'react'
import { Card } from 'react-bootstrap'

export default function Stats(props) {
    return (
        <Card style={{ minHeight: '150px', color: '#FFF' }} bg='info'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
