import React from 'react';
import './App.css';

class InfoPage extends React.Component {
    render() {
        return (
            <div className="InfoPage container">
                <div className="row h-100">
                    <div className="col-md-* Info-Left">
                        <h2>About Hackathons</h2>
                        <p>Literally Text</p>
                        <h2>About ArchHacks</h2>
                        <p>Literally Text</p>

                    </div>
                    <div className="col-md-* Info-Right">
                        <h2>FAQ</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoPage;