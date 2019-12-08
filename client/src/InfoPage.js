import React from 'react';
import './App.css';

class InfoPage extends React.Component {
    render() {
        return (
            <div className="InfoPage container-fluid">
                <div className="row h-100 Info-Row">
                    <div className="col-lg-7 Info-Col Info-Left">
                        <div className="Info-Left-Thick">
                            <div className="Info-Left-Gutter"></div>
                            <div className="Info-Left-Content">
                                <div className="Info-About-General">
                                    <h2 className="Info-Header">About Hackathons</h2>
                                    <p className="Info-Text">A hackathon is best described as an “invention marathon.” Anyone who has an interest in technology attends a hackathon to learn, build and share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
                                </div>
                                <div className="Info-About-Specific">
                                    <h2 className="Info-Header">About ArchHacks</h2>
                                    <p className="Info-Text">ArchHacks brings together more than 200 students of all backgrounds from around the country for 48 hours of collaboration, problem solving, and building. We will provide a unique opportunity for students to work with resources and companies they cannot find anywhere else. You will have the opportunity to make invaluable connections with corporations, collaborate with friends and, most importantly, develop something that will contribute to the HealthTech community.</p>
                                </div>
                            </div>
                            <div className="Info-Left-Gutter"></div>
                        </div>
                        
                    </div>
                    <div className="col-lg-5 Info-Col Info-Right">
                        <div className="Info-Right-Content">
                            <div className="Info-Right-Gutter"></div>
                            <div className="Info-Right-Thick">
                                
                                <div className="Info-FAQ-Text">
                                    <h2 className="Info-Header Info-FAQ-Header">FAQ</h2>
                                    <p className="Info-Question">Why HealthTech?</p>
                                    <p className="Info-Answer">Today the health industry has expanded to incorporate engineering, technology, digital design, and more. We have chosen this theme for ArchHacks because the HealthTech industry is growing exponentially with some of the most innovative technology available today, and we as college students will be the driving force behind this development.</p>
                                    <p className="Info-Question">What events can I expect at ArchHacks?</p>
                                    <p className="Info-Answer">Besides the main hacking event, we will have cup-stacking, on-site company interviews, group meals, swag giveaways, and more!!</p>
                                    <p className="Info-Question">What if information I need is not on the website?</p>
                                    <p className="Info-Answer">Please feel free to reach out to <span className="Info-Email">info@archhacks.io</span> if you have any further questions!</p>
                                </div>
                                
                            </div>
                            <div className="Info-Right-Gutter"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoPage;