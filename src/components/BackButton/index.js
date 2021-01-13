import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function BackButton() {
    const history = useHistory();

    return (
        <Button variant='info' onClick={() => history.push('/dashboard')}>Back</Button>
    )
}
