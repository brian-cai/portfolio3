import React, { Component } from 'react';
import AboutMePage from '../../pages/AboutMePage'
import StepmaniaPage from "../StepmaniaPage/StepmaniaPage";
import FencingPage from "../FencingPage/FencingPage";
import {Element} from 'react-scroll'

class LandingPage extends Component{
  render() {
    return (
        <div>
            <Element id="home" name="home" className="element">
                <AboutMePage/>
            </Element>
            <Element id="fencing" name="fencing" className="element">
                <FencingPage/>
            </Element>
            <Element id="stepmania" name="stepmania" className="element">
                <StepmaniaPage/>
            </Element>
        </div>

    );
  }
}

export default LandingPage;


