import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {


        return (
           
            
            <header className="App-header container">

                <img src={Logo} alt="ArchHacks Logo" id="landing-logo"/>
                <h1 className="Landing-Title" id="heading"><span id="heading-gray">ARCH</span><span id="heading-red">HACKS</span></h1>
                <p className="landing-gray">Washington University in St. Louis</p>
                <p className="landing-gray">February 21-23 | St. Louis, Missouri</p>
                {/* <button id="landing-applyButton">Apply</button> */}
                <form className="form-inline">
                    <input type="text" placeholder="Enter your email..." id="email-input"/>
                    <input type="submit" value="Join" id="join-button"/>
                </form>

            </header>

        )
    }
}

export default LandingPage;