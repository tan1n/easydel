import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export function ShopSettings() {

    const history = useHistory();

    const titleStyle = {
        color: '#ff7900',
        fontWeight: 'bold'
    }

    return (
        <Card>
            <Card.Img variant="top" src="images/settings.svg" style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title style={titleStyle}>Shop Settings</Card.Title>
                <Button variant="outline-info" onClick={() => history.push('/shop-settings')}>View</Button>
            </Card.Body>
        </Card>
    )
}
