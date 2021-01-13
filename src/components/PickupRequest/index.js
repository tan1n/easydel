import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export function PickupRequest() {

    const history = useHistory();

    const titleStyle = {
        color: '#ff7900',
        fontWeight: 'bold'
    }

    return (
        <Card>
            <Card.Img variant="top" src="images/pickup.svg" style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title style={titleStyle}>Pickup request</Card.Title>
                <Button variant="outline-info" onClick={() => history.push('pickup-request')}>Request Now</Button>
            </Card.Body>
        </Card>
    )
}
