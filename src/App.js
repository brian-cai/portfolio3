import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import './css/App.css';

import LandingPage from './pages/LandingPage';
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <div name="Portfolio">
            <NavigationBar />
            <LandingPage/>
            <Footer/>
        </div>

    );
  }
}

export default App;
