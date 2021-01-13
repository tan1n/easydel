import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export function History() {
    const history = useHistory();
    const titleStyle = {
        color: '#ff7900',
        fontWeight: 'bold'
    }
    return (
        <Card>
            <Card.Img variant="top" src="images/history.svg" style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title style={titleStyle}>Your delivery history</Card.Title>
                <Button variant="outline-info" onClick={() => history.push('/pickup-history')}>View</Button>
            </Card.Body>
        </Card>
    )
}
