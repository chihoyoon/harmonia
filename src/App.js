import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />     
      <Article />
      <Footer />
    </div>
    );
  }
}

export default App;