import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

function Signup() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Name, setName] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword =(e) => {
        setConfirmPassword(e.target.value)
    }

    const onClickSignup = () => {
        if (Password !== ConfirmPassword) {
            alert('The passwords do not match')

        } else {
            axios.post('http://localhost:5000/api/signup', {
                email: Email,
                password: Password,
                name: Name
            })
            // .then(() => console.log('success signup'))
            // .catch((err) => console.log(err))
        }
    };
 
 
    useEffect(() => {
        axios.get('/api/signup')
        .then(res => console.log(res))
        .catch()
    },
    [])

    return (
        <div className="align-items-center pl-5">
            <h2>Signup</h2>
            <Form>
                <Form.Group className="mb-3 col-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={Email} name="email" onChange={handleEmail} placeholder="Enter email" />                    
                </Form.Group>
                <Form.Group className="mb-3 col-auto">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={Name} name="name" onChange={handleName} placeholder="Enter your name" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-auto" name="password" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={Password} onChange={handlePassword} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 col-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={ConfirmPassword} onChange={handleConfirmPassword} placeholder="Confirm password" />
                </Form.Group>                 
                <Button variant="primary" type="submit" onClick={onClickSignup}>
                    Signup
                </Button>
            </Form>            
        </div>
    );
}

export default Signup;