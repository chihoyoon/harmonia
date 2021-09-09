import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Credential from './components/Credential';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Contact  from './components/Contact';


function App() {
  return (
    <div className="App">
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
              <Switch>
                  <Route exact path="/" component={Home_}></Route>
                  <Route path="/about" component={About_}></Route>
                  <Route path="/credential" component={Credential_}></Route>
                  <Route path="/service" component={Service_}></Route>
                  <Route path="/testimonials" component={Testimonials_}></Route>
                  <Route path="/contact" component={Contact_}></Route>
              </Switch>
          </BrowserRouter>
    </div>
  );
}

function Home_() {return <Home />};
function About_() {return <About />};
function Credential_() {return <Credential />};
function Service_() {return <Service />};
function Testimonials_() {return <Testimonials />};
function Contact_() {return <Contact />};

export default App;