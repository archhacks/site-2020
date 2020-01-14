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
                <form action="https://archhacks.us16.list-manage.com/subscribe/post?u=9bd66ca0a204f98ec01cdd5e2&id=5c42da0208" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="form-inline">
                    <input type="email" name="EMAIL" placeholder="Enter your email..." id="mce-EMAIL" className="email-input"/>
                    <div id="mce-responses" class="clear">
                        <div class="response field" id="mce-error-response" style={dNone}></div>
                        <div class="response field" id="mce-success-response" style={dNone}></div>
                    </div>
                    <div style={overThere} aria-hidden="true">
                        <input type="text" name="b_9bd66ca0a204f98ec01cdd5e2_5c42da0208" tabindex="-1" value=""/>
                    </div>
                    <input type="submit" value="Apply" na   e="Subscribe" className="join-button" id="mc-embedded-subscribe"/>
                </form>

            </header>

        )
    }
}

export default LandingPage;
