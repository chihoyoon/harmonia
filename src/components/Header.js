import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>         
              <nav className="navbar navbar-expand-sm navbar-secondary bg-secondary">
                    <h3 className="text-warning">Harmonia Wellness</h3>                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/credential">CREDENTIAL</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/service">SERVICE</Link>
                            </li>                            
                            <li className="nav-item active">
                                <Link to="/testimonials">TESTIMONIALS</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </BrowserRouter>
        );
    }
}

export default Header;