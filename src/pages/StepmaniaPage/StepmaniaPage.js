/**
 * Created by Brian Cai on 6/13/2018.
 */
import React, {Component} from 'react';


class StepmaniaPage extends Component {

    render() {
        return (
        <div style={{
                backgroundColor: "#222",
                color: "white",
                padding: "1vw"
            }}>
            <div class="stepmania-image" style={{height: "15em"}}>
            </div>
            <div class="walloftext" style={{
                fontSize: "1em",
                textAlign: "left",
                paddingLeft: "10vw",
                paddingRight: "10vw"
            }}>
                <p>
                    I play with my feet. Specifically, I play on an{' '}
                    <a href="https://www.amazon.com/dp/B000IBS78S/"
                       target="_blank" rel="noopener noreferrer">
                        Energy Metal Arcade Pad with Handle Bars.
                    </a>

                    <br/>
                    These songs are recommended because they are fun. Some tracks listed only have "hard levels" (8-9 Difficulty).
                </p>

                <p>
                    Never Played Before?
                    <br/>
                    <a href="http://ec2.stepmania.com/wiki/Install_and_Configure_StepMania"
                       target="_blank" rel="noopener noreferrer">
                        INSTALLATION INSTRUCTIONS
                    </a>
                </p>
                <p>
                    Song Suggestions:
                </p>
                <p>
                    <span>
                        <h2>
                            Evacuate the Dance Floor [Cascada]
                        </h2>
                    </span>
                    <span>

                        <span>
                            <a className="button" href={process.env.PUBLIC_URL + '/stepmania/EvacuatetheDanceFloorXynn.zip'}
                               target="_blank" rel="noopener noreferrer"
                               download={"evacuatethedancefloor.zip"}>
                                Download
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/8MZNZDMgTBQ?t=89">
                                <div class="youtube-icon">
                                </div>
                            </a>
                        </span>
                    </span>
                </p>
                <p>
                    <span>
                        <h2>
                            Lone Digger [Caravan Palace]
                        </h2>
                    </span>
                    <span>

                        <span>
                            <a className="button" href={process.env.PUBLIC_URL + '/stepmania/LoneDigger.zip'}
                               target="_blank" rel="noopener noreferrer"
                               download={"lonedigger.zip"}>
                                Download
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Ao5SVS85bbA">
                                <div class="youtube-icon">
                                </div>
                            </a>
                        </span>
                    </span>
                </p>
                <p>
                    <span>
                        <h2>
                            Summertime Sadness (Cedric Gervais Remix) [Lana Del Ray]
                        </h2>
                    </span>
                    <span>

                        <span>
                            <a className="button" href={process.env.PUBLIC_URL + '/stepmania/SummertimeSadness_CGMix.zip'}
                               target="_blank" rel="noopener noreferrer"
                               download={"summertimesadness.zip"}>
                                Download
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=akhmS1D2Ce4">
                                <div class="youtube-icon">
                                </div>
                            </a>
                        </span>
                    </span>
                </p>
                <p>
                    <span>
                        <h2>
                            Connect (Mahou Shoujo Madoka Magica Opening)
                        </h2>
                    </span>
                    <span>

                        <span>
                            <a className="button" href={process.env.PUBLIC_URL + '/stepmania/Connect_Magi_Madoka.zip'}
                               target="_blank" rel="noopener noreferrer"
                               download={"connect_anime.zip"}>
                                Download
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vYqg0VOmHqg">
                                <div class="youtube-icon">
                                </div>
                            </a>
                        </span>
                    </span>
                </p>
                <p>
                    <span>
                        <h2>
                            Starboy [The Weeknd]
                        </h2>
                    </span>
                    <span>

                        <span>
                            <a className="button" href={process.env.PUBLIC_URL + '/stepmania/Starboy.zip'}
                               target="_blank" rel="noopener noreferrer"
                               download={"starboy.zip"}>
                                Download
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/34Na4j8AVgA?t=43">
                                <div class="youtube-icon">
                                </div>
                            </a>
                        </span>
                    </span>
                </p>


            </div>
        </div>
        );
    }
}

export default StepmaniaPage;