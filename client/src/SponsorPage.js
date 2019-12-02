import React from 'react';
import './App.css';

class SponsorPage extends React.Component {
    render() {
        return (
            <div className="SponsorPage">
                <h2 className="Sponsor-Header">Sponsors</h2>
                <p className="Sponsor-Text">ArchHacks is currently accepting sponsors! If you are interested in sponsoring this event, please reach out to <span className="Sponsors-Email">sponsors@archhacks.io</span>!</p>
            </div>
        )
    }
}

export default SponsorPage;