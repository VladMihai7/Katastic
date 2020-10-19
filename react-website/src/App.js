import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Advantages from './components/pages/Advantages'
import Benefits from './components/pages/Benefits'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
         <Switch>
          <Route path='/' exact component= {Home} /> 
          <Route path='/advantages' exact component= {Advantages} />
          <Route path='/benefits' exact component= {Benefits} />
         </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
