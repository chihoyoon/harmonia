import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm text-center">
                        <br />
                        <h1>Contact Us</h1>
                        <br />
                        <h2>Aspen SW Calgary Massage</h2>
                        <h6>Therapeutic, Sport Massage & Skin Care</h6>
                        <h5>Office: 403-288-5982</h5>
                        <h5>Cell: 403-478-1017</h5>
                        <h5>Email: jinahwangem@gmail.com</h5>
                    </div>
                    <div className="col-sm embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.6036270158793!2d-114.21713668416187!3d51.04194115244882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716dc5a7dea657%3A0xaaa0a807b95317bd!2sHarmonia%20Wellness!5e0!3m2!1sen!2sca!4v1601882760357!5m2!1sen!2sca" allowfullscreen></iframe>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Contact;