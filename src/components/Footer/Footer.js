import React, {Component} from 'react';

class Footer extends Component {


    render() {
        return (
            <section id="credits"
                     style={{
                         marginTop: "20vh",
                         marginBottom: "4vh"
                     }}>

                <div class="h1" style={{
                    zIndex: 5,
                    width: "100%",
                    margin: "0 auto",
                    textAlign: "50%",
                    backgroundColor:"transparent"
                }}>
                    Copyright &copy; Brian Cai
                </div>
            </section>
        )
    }
};

export default Footer;