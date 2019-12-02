import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {


        return (
           
            
            <header className="App-header container">

           
                <img src={Logo} alt="ArchHacks Logo" id="landing-logo" width= "30%"/>
                <h1 id="heading"><span id="heading-gray">ARCH</span><span id="heading-red">HACKS</span></h1>
                <p class="landing-gray">Washington University in St. Louis</p>
                <p class="landing-gray">February 21-23 | St. Louis, Missouri</p>
                <button id="landing-applyButton">Apply</button>
              
            </header>

        )
    }
}

export default LandingPage;