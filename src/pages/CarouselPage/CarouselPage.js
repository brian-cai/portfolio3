/**
 * Created by Brian Cai on 6/13/2018.
 */
import React, {Component} from 'react';
import {React_Bootstrap_Carousel} from "react-bootstrap-carousel";
import LaptopStickerArt from '../../images/laptop_sticker_art.jpg'
import AlexaTHWG from '../../videos/alexathwg.mp4'
import Shapeshifter from '../../images/shapeshifter.png'
import RainRiven from '../../videos/rainmeterriven.webm'
import ColorFly from '../../videos/ColorFlyDemo.mp4'
const styles = { height: 400, width: "100%" };

class CarouselPage extends Component {


    constructor(props) {
        super(props);

        this.captions = [];
        this.captions.push("A hacker's skills are directly correlated with the number of stickers           on their laptop, right? ");
        this.captions.push("I taught Alexa some school spirit for her new skill");
        this.captions.push("Neopets game solver using A* search");
        this.captions.push("A documented history of me trying to learn web dev");
        this.captions.push("CS 4400 MySQL Database. Rehosted on heroku and https://freemysqlhosting.net");
        this.captions.push(<div>Customized edgy desktop background (Rainmeter).
            {/*Download <a href="https://www.google.com">here</a>*/}
            </div>);
        this.captions.push("We won 1st prize in augmented reality and a free project tango at               VandyHacks for it. Unfortunately, google has shut down project tango to do software              solutions such as ARCore");
        this.captions.push("First chrome extension and javascript project. May cause seizures.")
        this.state = {
            autoplay: false,
            displaytext: this.captions[0]
        };
    }
    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
        this.setState({displaytext: this.captions[`${active}`]});
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };

    render() {
        let { leftIcon, rightIcon } = this.state;
        return (
            <div style={{
                backgroundColor: "#222",
                color: "white",
                padding: "20vh 1vw",
                height: 850
            }}>
                <div>
                    <div className="container-fluid" style={{ backgroundColor: "#222222" }}>
                        <div className="row">
                            <div className="col-md-12" style={{alignItems: 'center'}}>
                                {
                                    // eslint-disable-next-line
                                }<React_Bootstrap_Carousel
                                animation={true}
                                autoplay={this.state.autoplay}
                                slideshowSpeed={3300}
                                defaultActiveIndex={0}
                                leftIcon={leftIcon}
                                rightIcon={rightIcon}
                                onSelect={this.onSelect}
                                ref={r => (this.slider = r)}
                            >
                                <div style={{ height: 400 }}>

                                    <img
                                        className="carousel-center"
                                        style={{ height: "100%",
                                        maxWidth: "100%"}}
                                        src={LaptopStickerArt}
                                        alt="Laptop Sticker Decoration"
                                    />
                                </div>
                                <div
                                    style={{
                                        height: 400,
                                    }}
                                >
                                    <video
                                        className="carousel-center"
                                        controls
                                        style={{ width: "100%" }}
                                    >
                                        <source
                                            src={AlexaTHWG}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                                <div
                                    style={{
                                        height: 400,
                                        width: "100%",
                                        textAlign: "left",
                                        backgroundColor: "red",
                                        fontSize: "1em",
                                    }}
                                >
                                    <img
                                        src={Shapeshifter}
                                        alt="Shapeshifter Game Board"
                                        style={{ height: "100%"}}/>
                                    <div>

                                    </div>
                                    <div className="carousel-center"
                                         style={{
                                             overflowY: "auto",
                                             overflow: "auto",
                                             marginLeft: "5%",
                                         }}>
                                        <p>
                                            Shapeshifter Solver
                                        </p>
                                        <p>
                                            Game: <a href="http://www.neopets.com/games/game.phtml?game_id=151" target="_blank" rel="noopener noreferrer"> Shapeshifter (Neopets) </a>
                                        </p>
                                        <p>
                                            User: shapeshiftersolver, Pass: algorithm123
                                        </p>
                                        <p>
                                            Source Code: <a href="https://github.com/brian-cai/ShapeshifterHtml" target="_blank" rel="noopener noreferrer"> Github </a>
                                        </p>
                                    </div>


                                </div>
                                <div
                                    style={{
                                        height: 400,
                                        width: "100%",
                                        textAlign: "left",
                                        backgroundColor: "lightblue",
                                        fontSize: "1em",
                                    }}
                                >
                                    <div className="carousel-center"
                                    style={{
                                        height: "70%",
                                        overflowY: "auto",
                                        overflow: "auto",

                                        marginTop: "5%",
                                    }}>
                                        <p>
                                            My past portfolio websites can be found here:
                                        </p>
                                        <a href="https://brian-cai.github.io/portfolio2" target="_blank" rel="noopener noreferrer">Portfolio 2</a>: Learning Webstorm and Animations (August 2017)
                                        <br/>
                                        <a href="https://brian-cai.github.io/cs1100website" target="_blank" rel="noopener noreferrer">Portfolio 1</a>: Learning Bootstrap, HTML, and CSS (August 2016)
                                        We were required to make a website for CS1100, so I figured I would teach myself HTML and CSS. My roommate suggested bootstrap to start off.
                                        <br/>
                                        I have also done an assortment of nodejs and other js frameworks for projects and internships. Documentation can be found on my linkedin and my github. This current website's main purpose was to learn the basics of react (without redux). Documentation of that can be found <a href = "https://github.com/brian-cai/portfolio3/tree/sourcecode" target="_blank" rel="noopener noreferrer" >here</a>.
                                    </div>

                                </div>
                                <div
                                    style={{
                                        height: 400,
                                        width: "100%",
                                        textAlign: "left",
                                        backgroundColor: "lightgreen",
                                        fontSize: "1em",
                                    }}
                                >
                                    <div className="carousel-center"
                                         style={{
                                             height: "70%",
                                             overflowY: "auto",
                                             overflow: "auto",

                                             marginTop: "5%",
                                         }}>
                                        <h1>
                                            Air and Mold Quality Database
                                        </h1>
                                        <p>
                                            Demo: <a href="https://cs4400.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
                                        </p>
                                        <p>
                                            Source Code and Documentation (including EER and Relational Diagrams): <a href="https://github.com/brian-cai/cs4400" target="_blank" rel="noopener noreferrer">Github</a>
                                        </p>
                                        <p>
                                            Tools: php, mysql, mysqli
                                        </p>

                                    </div>

                                </div>
                                <div
                                    style={{
                                        height: 400,
                                    }}
                                >
                                    <video
                                        className="carousel-center"
                                        controls
                                        style={{ width: "100%",
                                        height: "100%"}}
                                    >
                                        <source
                                            src={RainRiven}
                                            type="video/webm"
                                        />
                                    </video>
                                </div>
                                <div style={{ ...styles}}>
                                    <div className="carousel-center">
                                        <iframe
                                            style={{ width: "100%" }}
                                            height="250"
                                            src="https://www.youtube.com/embed/ga7__01qHFQ"
                                            frameBorder="0"
                                            allowFullScreen
                                            title="AR Game"
                                        />
                                    </div>
                                    <div className="carousel-caption"><a href="https://devpost.com/software/can-t-stump-rfpdgz" target="_blank" rel="noopener noreferrer">https://devpost.com/software/can-t-stump-rfpdgz</a></div>
                                </div>

                                <div
                                    style={{
                                        height: 400,
                                    }}
                                >
                                    <video
                                        className="carousel-center"
                                        controls
                                        style={{ width: "100%",
                                            height: "100%"}}
                                    >
                                        <source
                                            src={ColorFly}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>


                            </React_Bootstrap_Carousel>
                                <div style={{ width: "100%", height: "100%", verticalAlign: "top" }}>
                                    <div style={{display: "flex",
                                        justifyContent: "center",
                                        color: "white"}}>

                                    <span>
                                        {this.state.displaytext}
                                    </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div style={{alignContent: "center", display: "flex", justifyContent: "center"}}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.autoplay}

                            >
                                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
                            </button>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default CarouselPage;