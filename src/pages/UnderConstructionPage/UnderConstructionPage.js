import React, { Component } from 'react';

class LandingPage extends Component{
  render() {
    return (
        <div className = "App">
            <div className="Beta-Page">
                <p className="App-intro">
                    Hello, I'm Brian Cai. I'm in the process of creating a new react website, and it's currently unfinished.
                </p>
                <p className="Information">
                    My past websites came be found here:
                    <br></br>
                    <a href="https://brian-cai.github.io/portfolio2" target="_blank" rel="noopener noreferrer">Portfolio 2</a>
                    <br></br>
                    <a href="https://brian-cai.github.io/cs1100website" target="_blank" rel="noopener noreferrer">Portfolio 1</a>
                </p>
                <p class="Website">
                    Social Media:
                    <br></br>
                    <a href="http://linkedin.com/in/brian---cai" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <br></br>
                    <a href="https://github.com/brian-cai" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </p>
            </div>
        </div>


    );
  }
}

export default LandingPage;


