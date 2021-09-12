import React, { Component } from 'react';
import maniger from '../images/credential.jpg';

class Credential extends Component {
    render() {
        return (
            <div className="text-center">
                <br />
                <img src={maniger} alt="maniger" />
                <br />
                <h1 className="text-primary">Royal Meridian Massage Therapy</h1>
                <br />
                <h3>We offer a Unique Massage</h3>
                <h3>Open meridian points all over your body</h3>
                <h3>Realigning your body structure</h3>
                <h3>Acupuncture pressure point face-lift skin care</h3>
                <br /><br />
                <h4 className="text-success">We are Licensed, Certified and Registered Massage Therapists. RMT with Natural Health Practitioners of Canada Association, Reiki Master, Natural Health Consultant </h4>
            </div>
        );
    }
}

export default Credential;