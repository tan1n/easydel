import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

export default function LoginButton() {

    const history = useHistory();

    return (
        <Button variant="outline-info" onClick={() => history.push("/login")}>Merchant Login</Button>
    )
}
