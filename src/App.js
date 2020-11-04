import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/';
import Home from './components/Home/';
import About from './components/About/';
import './App.css';

class App extends Component {

  render() {
    return (
			<Router>
				<div className="App">
					<Header />
					
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/services">
							<Services />
						</Route>
					</Switch>
				</div>
			</Router>
    );
  }
}

function Services() {
  return <h2>Services</h2>
}

export default App;
