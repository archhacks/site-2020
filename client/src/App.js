import React from 'react';
import './App.css';
import MLHBadge from "./MLHBadge.png";
import BG from "./bg.png"
import LandingPage from './LandingPage.js'
import InfoPage from './InfoPage.js'
import SponsorPage from './SponsorPage.js'

function App() {

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
    <div className="App">
      <a id="mlh-trust-badge" style={aStyle} href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white" target="_blank">
        <img src={MLHBadge} alt="Major League Hacking 2020 Hackathon Season" style={imgStyle}/>
      </a>
      <img src={BG} alt="Background"/>
      <div className="LandingPage Page">
          
          <LandingPage />
          <InfoPage />
          <SponsorPage />
      </div>
    </div>
  );
}

export default App;
