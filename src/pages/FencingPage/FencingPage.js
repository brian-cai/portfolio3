/**
 * Created by Brian Cai on 6/13/2018.
 */
import React, {Component} from 'react';
import {React_Bootstrap_Carousel} from "react-bootstrap-carousel";
import Clip1 from "../../videos/fencing/01Arthur88Remise.mp4";
import Clip2 from "../../videos/fencing/02RiposteBehind.mp4";
import Clip3 from "../../videos/fencing/03Beat6.mp4"
import Clip4 from '../../videos/fencing/04AnthonyHoldLine.mp4'
import Clip5 from '../../videos/fencing/05KendrickDuckRemise.mp4'
import Clip6 from '../../videos/fencing/06Arthur8Bind.mp4'
import Clip7 from '../../videos/fencing/07StefanoLate4.mp4'
import Clip8 from '../../videos/fencing/08Kendrick8Dodge.mp4'

var askfredurl = 'https://askfred.net/Results/search.php?ops%5Bfirst_name%5D=first_name&vals%5Bfirst_name%5D=brian&ops%5Blast_name%5D=last_name&vals%5Blast_name%5D=cai&f%5Bweapon%5D=Epee&ops%5Bdate_1%5D=date_1_eq&vals%5Bdate_1%5D=&ops%5Bdate_2%5D=date_2_eq&vals%5Bdate_2%5D=&f%5Bclub_id%5D=&f%5Bcompetitor_division_id%5D=&ops%5Bplace%5D=place_eq&vals%5Bplace%5D=&f%5Bevent_gender%5D=men-mixed&f%5Bage_limit%5D=&f%5Bevent_rating_limit%5D=&ops%5Bevent_rating%5D=event_rating_eq&vals%5Bevent_rating%5D=&f%5Bis_team%5D=0&ops%5Brating_earned%5D=eq&vals%5Brating_earned_letter%5D=&vals%5Brating_earned_year%5D=&f%5Btournament_name_contains%5D=&FREDSID=aptob37kf38287om21mg8sn1k0&search_submit=Search';

class FencingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autoplay: false,
        };
    }

    render() {
        let {leftIcon, rightIcon} = this.state;
        return (
        <div style={{
                backgroundColor: "#222",
                color: "white",
                paddingTop: "20vh",
                paddingLeft: "1em",
                paddingRight: "1em",
                paddingBottom: "100vh",
                height: 850
            }}>
            <div class="walloftext" style={{
                fontSize: "1em",
                textAlign: "left",
                paddingLeft: "10vw",
                paddingRight: "10vw"
            }}>

                <p>
                    USFA Match History: <a href={askfredurl} target="_blank" rel="noopener noreferrer"> AskFred </a>
                <p>
                </p>
                    Video Clips
                </p>
            </div>
            <div>
                <div className="container-fluid" style={{ backgroundColor: "#222222" }}>
                    <div className="row">
                        <div className="col-md-12" style={{alignItems: 'center'}}>
                            {
                                // eslint-disable-next-line
                            }<React_Bootstrap_Carousel
                            animation={true}
                            autoplay={this.state.autoplay}
                            defaultActiveIndex={0}
                            leftIcon={leftIcon}
                            rightIcon={rightIcon}
                            onSelect={this.onSelect}
                            ref={r => (this.slider = r)}
                        >

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
                                        src={Clip1}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip2}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip3}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip4}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip5}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip6}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip7}
                                        type="video/mp4"
                                    />
                                </video>
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
                                        src={Clip8}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                        </React_Bootstrap_Carousel>
                        </div>



                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default FencingPage;