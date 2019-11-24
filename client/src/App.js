import React from 'react';
import './App.css';
import LandingPage from './LandingPage.js'
import InfoPage from './InfoPage.js'
import SponsorPage from './SponsorPage.js'

function App() {
  return (
    <div className="App">
      <div className="LandingPage Page">
          <LandingPage />
          <InfoPage />
          <SponsorPage />
      </div>
    </div>
  );
}

export default App;
