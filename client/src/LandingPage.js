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
            
            <header className="App-header container">
                
                <img src={Logo} alt="ArchHacks Logo" id="landing-logo"/>
                <h1 className="Landing-Title" id="heading"><span id="heading-gray">ARCH</span><span id="heading-red">HACKS</span></h1>
                <p className="landing-gray">Washington University in St. Louis</p>
                <p className="landing-gray">HealthTech</p>
                {/* <button id="landing-applyButton">Apply for Exec</button> */}

                <form action="https://archhacks.typeform.com/to/iKFL95">
                    <input type="submit" value="Apply for Exec" na   e="Subscribe" className="join-button" id="mc-embedded-subscribe"/>
                </form>
                <a className="news-a" href="http://eepurl.com/gPL1Fr"><p className="newsletter">Want to join the newsletter too?</p>
                <p className="newsletter">Sign up here.</p></a>
                

            </header>
            </div>
        )
    }
}

export default LandingPage;
