import React from 'react';
import './App.css';

class InfoPage extends React.Component {
    render() {
        return (
            <div className="InfoPage container-fluid">
                <div className="row h-100">
                    <div className="col-md-7 Info-Col Info-Left">
                        <div className="Info-Left-Content">
                            <div className="Info-About-General">
                                <h2 className="Info-Header">About Hackathons</h2>
                                <p className="Info-Text">A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build and share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
                            </div>
                            <div className="Info-About-Specific">
                                <h2 className="Info-Header">About ArchHacks</h2>
                                <p className="Info-Text">ArchHacks brings scientists and creatives together, inspiring individuals and teams to create a project with an emphasis on biotechnology. Over 36 hours, you can expect to build something completely new, get free food and swag, and have a chance to network with top recruiters in the industry!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 Info-Col Info-Right">
                        <div className="Info-Right-Content">
                            <h2 className="Info-Header">FAQ</h2>
                            <p className="Info-Question">Question?</p>
                            <p className="Info-Answer">Answer!! Yes, the answer is yes!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoPage;