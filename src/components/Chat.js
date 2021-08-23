import React, { useState, useEffect } from 'react'
import queryString from 'query-string'; 
import io from 'socket.io-client';
let socket

export default function Chat({ location }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]); 
    const ENDPOINT = "localhost:5000"

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        
        socket.emit("join", { name, room }, ({ error }) => {
            alert(error);
        });

        return () => {
            socket.emit("disconnect");

            socket.off();
        }
    }, [location.search, ENDPOINT]);

    useEffect(() => {
        socket.on("message", (message) => {

        })
    }, [messages]);

    // Function for sending messages

    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}
