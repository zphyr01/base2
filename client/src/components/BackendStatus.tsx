"use client";

import React from 'react'

export default function BackendStatus() {
    const [message, setMessage] = React.useState("Checking backend...");

    React.useEffect(() => {
        fetch('http://localhost:4000/api/health')
            .then((res) => res.json())
            .then((data) => setMessage(`Backend says: ${data.status}`))
            .catch(() => setMessage("Could not reach the backend"));
    }, []);
    
    return <p>{message}</p>
}