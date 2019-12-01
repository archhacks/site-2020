import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {

        //CSS FOR MLH BADGE
        const aStyle={
            display:'block',
            maxWidth:'100px',
            minWidth:'60px',
            position:'fixed',
            right:'50px',
            top:0,
            width:'10%',
            zIndex:'10000'
        }
        const imgStyle={
            width: '100%',
        }
        return (
           
            
            <header className="App-header container">

                <a id="mlh-trust-badge" style={aStyle} href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white" target="_blank">
                    <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg" alt="Major League Hacking 2020 Hackathon Season" style={imgStyle}/>
                </a>
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