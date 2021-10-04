import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import Credential from './components/Credential';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Contact  from './components/Contact';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends React.Component {
    
  render () {
      return (
        <div className="App">
            <BrowserRouter>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <h3 className="text-warning">Harmonia Wellness</h3>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">HOME</Link></Nav.Link>
                            <Nav.Link><Link to="/about">ABOUT</Link></Nav.Link>
                            <Nav.Link><Link to="/credential">CREDENTIAL</Link></Nav.Link>
                            <Nav.Link><Link to="/service">SERVICE</Link></Nav.Link>
                            <Nav.Link><Link to="/testimonials">TESTIMONIALS</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">CONTACT</Link></Nav.Link>
                            <Nav.Link><Link to="/api/book">Book</Link></Nav.Link>
                            <Nav.Link><Link to="/api/login">Login</Link></Nav.Link>
                            <Nav.Link><Link to="/api/signup">Signup</Link></Nav.Link>                                                        
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>      
                <Switch>
                    <Route exact path="/" component={Home_}></Route>
                    <Route path="/about" component={About_}></Route>
                    <Route path="/credential" component={Credential_}></Route>
                    <Route path="/service" component={Service_}></Route>
                    <Route path="/testimonials" component={Testimonials_}></Route>
                    <Route path="/contact" component={Contact_}></Route>
                    <Route path="/api/book" component={Booking_}></Route>
                    <Route path="/api/login" component={Login_}></Route>
                    <Route path="/api/signup" component={Signup_}></Route>
                </Switch>
            </BrowserRouter>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
      );    
  } 
}

function Home_() {return <Home />};
function About_() {return <About />};
function Credential_() {return <Credential />};
function Service_() {return <Service />};
function Testimonials_() {return <Testimonials />};
function Contact_() {return <Contact />};
function Booking_() {return <Booking />};
function Login_() {return <Login />};
function Signup_() {return <Signup />};

export default App;