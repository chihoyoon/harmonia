import React, { Component } from 'react';

import main_flag from '../images/mainflag.png';
import main_image from '../images/main.gif';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={main_flag} alt="main_flag" />;
                <img src={main_image} alt="main_image" />;



            </div>
        );
    }
}

export default Home;