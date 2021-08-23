import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Join.css"

export default function Join() {
    const roomRef = useRef();
    const nameRef = useRef();
    const history = useHistory();
    const [error, SetError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        SetError("")

        history.push(`/chat?name=${nameRef.current.value}&room=${roomRef.current.value}`)
    }
     
    return (
        <div className="joinContainer">
                <Card className="mt-5">
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Card.Title>Join a Room</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="formName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" ref={nameRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id="formRoom">
                                <Form.Label>Room</Form.Label>
                                <Form.Control type="text" ref={roomRef} placeholder="Enter room name here" required></Form.Control>
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-4">Join Room</Button>
                        </Form>
                    </Card.Body>
                </Card>
    </div>
    )
}
