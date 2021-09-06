import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-secondary bg-secondary">
                    <h3 className="text-warning">Harmonia Wellness</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/credential">CREDENTIAL</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/service">SERVICE</a>
                            </li>                            
                            <li className="nav-item active">
                                <a className="nav-link" href="/testimonials">TESTIMONIALS</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </div>
        );
    }
}

export default Header;