import React, {Component} from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link, animateScroll as scroller } from 'react-scroll'


class NavigationBar extends Component {

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect style={{
                zIndex: 10000,
                backgroundColor: "black",
                marginBottom: "0",
                position: "fixed",
                top: 0, /* Position the navbar at the top of the page */
                width: "100%" /* Full width */
            }}>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#home">
                            <Link activeClass="active" to="home" smooth={true} duration={200} style={{color: "#9d9d9d"}}>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#fencing">
                            <Link activeClass="active" to="fencing" smooth={true} duration={200} style={{color: "#9d9d9d"}}>
                                Fencing
                            </Link>
                        </NavItem>
                        <NavItem eventKey={1} href="#stepmania">
                            <Link activeClass="active" to="stepmania" smooth={true} duration={200} style={{color: "#9d9d9d"}}>
                                Stepmania
                            </Link>
                        </NavItem>
                        <NavItem href={'https://drive.google.com/open?id=10KnMCg77Oz1fSHNKbupgl0dRU6YRZ2rv'}
                                 target="_blank">
                            Resume
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


    );
    }
};

export default NavigationBar;