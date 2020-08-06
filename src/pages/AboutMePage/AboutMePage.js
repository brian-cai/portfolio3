/**
 * Created by Brian Cai on 6/13/2018.
 */
import React, {Component} from 'react';
import '../../css/social.css';
import '../../css/css/fontawesome-all.min.css';

class AboutMePage extends Component {

    render() {
        return (
        <div style={{
                backgroundColor: "#222",
                color: "white",
                padding: "40vh 1vw",
                height: 850
            }}>
            <div class="walloftext" style={{
                fontSize: "1.5em",
                textAlign: "center",
                paddingLeft: "10vw",
                paddingRight: "10vw",
                paddingBottom: "20vh"
            }}>
                <p>
                    Hi, I'm a Software Engineer at <a target="_blank" rel="noopener noreferrer" href="https://twilio.com"style={{ color: 'red' }}>Twilio</a>, working on platform infrastructure. 
                </p>
                <p>
                    I can be emailed at the<span>brian</span>cai [at] <span>gma</span>il [dot] com.
                </p>
            </div>
            <div class ="socialm" style={{padding: "0.4vw"}}>

                <div class="wrapper" style={{background: "transparent"}}>
                    <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/1245182420">
                        <i class="fab fa-5x fa-spotify"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/brian---cai">
                        <i class="fab fa-5x fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/brian-cai">
                        <i class="fab fa-5x fa-github"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=K7Hn1rPQouU">
                        <i class="fab fa-5x fa-youtube-square"></i>
                    </a>
                </div>
            </div>
        </div>

        );
    }
}

export default AboutMePage;