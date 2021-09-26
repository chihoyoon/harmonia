import React, { Component } from 'react';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/api')
            .then(res => res.json())
            .then(data => this.setState({title: data.title}));
    }

    render() {
        return (
            <div>                
               {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
            </div>
        );
    }
}

export default Booking;