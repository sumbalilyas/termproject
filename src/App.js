import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import logo from './projectcomponents/logo.jpg';
import { BrowserRouter, Route,Link } from "react-router-dom";
import Login from "./projectcomponents/login";
import Registration from "./projectcomponents/Registration";
import Words from "./projectcomponents/Words";
import Home from "./projectcomponents/Home";
import  About from "./projectcomponents/about";
import Gallery from "./projectcomponents/Gallery";
import contact from "./projectcomponents/contact";
import News from "./projectcomponents/News";
class App extends Component {
  
  render() {
    return (
      
      <BrowserRouter>
      <div className="App">
      
      <p class="name">
        COLLEGE OF SCIENCE AND COMMERCE </p>
      <ul>
      <li>
            <Link to="/home">Home</Link>
          </li> 
          <li>
            <Link to="/login">Registration  </Link>
          </li> 
          <li>
            <Link to="/Words">Words </Link>
          </li> 
          <li>
          <Link to="/Gallery">Gallery </Link>
          </li>
         <li> <Link to="/News">News  </Link>
         </li>
          <li><Link to="/Contact">Contact  </Link>
          </li>
          
          <li><Link to="/About">About </Link>
          </li>
          </ul> 
          <Route path="/Home" component={Home}></Route> 
           <Route path="/login" component={Login}></Route> 
          <Route path="/registration" component={Registration}></Route>
          <Route path="/A word from Principle" component={Words}></Route>
          <Route path="/Gallery" component={Gallery}></Route>
          <Route path="/contact" component={contact}></Route>
          <Route path="/About" component={About}></Route>
          
          <Route path="/Words" component={Words}></Route>
          <Route path="/News" component={News}></Route>
          
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
