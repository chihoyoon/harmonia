import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const onClickLogin = () => {
        axios.post('/api/login', null, {
            params: {
                'email': Email,
                'password': Password
            }
        }).preventDefault()
        .then(res => {
            if (res.data.email === undefined){
                alert('Could not find your email')
            } else if (res.data.email === null){
                alert('Wrong password. Tr again.')
            } else if (res.data.email === Email){
                sessionStorage.setItem('email', Email)                
            }
            document.location.href = '/booking'
        })
        .catch()
    }
 
    useEffect(() => {
        axios.get('/api/login')
        .then(res => console.log(res))
        .catch()
    },
    [])

    return (
        <div className="align-items-center pl-5">
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3 col-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={Email} onChange={handleEmail} placeholder="Enter email" />                    
                </Form.Group>
                <Form.Group className="mb-3 col-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={Password} onChange={handlePassword} placeholder="Password" />
                </Form.Group>                  
                <Button variant="primary" type="submit" onClick={onClickLogin}>
                    Login
                </Button>
            </Form>                      
        </div>        
    );
}

export default Login;