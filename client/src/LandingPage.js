import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';

const dNone = {
    display: 'none'
}

const overThere = {
    position: 'absolute',
    left: '-5000px'
}

class LandingPage extends React.Component {

    

    render() {


        return (
        <div>   
            <div className="social_media">
                    <a href="https://github.com/archhacks"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.facebook.com/archhacks/"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://twitter.com/archhacks"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://medium.com/@ArchHacks"><i class="fab fa-medium-m fa-2x"></i></a>
                </div>
            <header className="App-header container">
                
                <img src={Logo} alt="ArchHacks Logo" id="landing-logo"/>
                <h1 className="Landing-Title" id="heading"><span id="heading-gray">ARCH</span><span id="heading-red">HACKS</span></h1>
                <p className="landing-gray">Washington University in St. Louis</p>
                <p className="landing-gray">HealthTech | February 28-March 1</p>
                {/* <button id="landing-applyButton">Apply</button> */}

                <input type="submit" value="Apply" na   e="Subscribe" className="join-button" id="mc-embedded-subscribe"/>
                <a className="news-a" href="http://eepurl.com/gPL1Fr"><p className="newsletter">Want to join the newsletter too?</p>
                <p className="newsletter">Sign up here.</p></a>
                

            </header>
            </div>
        )
    }
}

export default LandingPage;
