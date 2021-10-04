import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {Form, Button} from 'react-bootstrap';


function Booking() {    
    const [Email, setEmail] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleTime = (e) => {
        setTime(e.target.value)
    }


    const onClickBook = () => {    
        axios.post('http://localhost:5000/api/book', {
            email: Email,
            date: Date,
            time: Time
        });
    };
    
    
    useEffect(() => {
        axios.get('/api/book')
        .then(res => console.log(res))
        .catch()
    },
    []);

    return (
        <div className="container center">
            <h2>Book</h2>
            <Form>
                <Form.Group className="mb-3 col-lg-4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={Email} name="email" onChange={handleEmail} placeholder="Enter email" />                    
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4">
                    <Form.Label>date</Form.Label>
                    <Form.Control type="date" value={Date} name="date" onChange={handleDate} placeholder="Enter date" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" value={Time} onChange={handleTime} placeholder="Enter time" />
                </Form.Group>                              
                <Button variant="primary" type="submit" onClick={onClickBook}>
                    Signup
                </Button>
            </Form>            
        </div>
    );
}


export default Booking;