import React from 'react';
import './App.css';

class CovidResourcePage extends React.Component {
    render(){
        return (
            
        <div className="COVID">
            <a name="COVID"></a>
            <h2 className="Info-Header"><i className="fas fa-exclamation-triangle fa-xs"></i>  COVID-19 Resources  <i className="fas fa-exclamation-triangle fa-xs"></i></h2>
            <p className="COVID-Compiled">We have compiled a list of coronavirus-related resources to connect volunteers with projects and those in need.</p>
            <br></br>
            <div class="row">
            <div className="col-xl Info-Left">
                <h3 className="Info-Mini-Header">General</h3>
                    <a href="https://coronavirustechhandbook.com/home" target="_blank" rel="noopener noreferrer">Coronavirus Tech Handbook</a>
                    <p>A crowd-sourced library with endless coronavirus-related resources</p>
                    <a href="https://www.lesswrong.com/coronavirus-link-database" target="_blank" rel="noopener noreferrer">LessWrong Coronavirus Database</a>
                    <p>An incredible database of COVID-19 information</p>
                    <a href="https://docs.google.com/document/d/1dTCjaKh6f3SfOh_RuFEG-UMe8xAKhE527x3oAbVpzQM/edit" target="_blank" rel="noopener noreferrer">COVID-19 Links</a>
                    <p>A Google Doc full of coronavirus-related links</p>
                <br></br>
                <h3 className="Info-Mini-Header">Hackathons</h3>
                    <a href="https://devpost.com/hackathons?challenge_type=online" target="_blank" rel="noopener noreferrer">DevPost</a>
                    <p>A huge collection of virtual hackathons</p>
                    <a href="https://coronavirustechhandbook.com/hackathons" target="_blank" rel="noopener noreferrer">Coronavirus Tech Handbook Hackathons</a>
                    <p>A crowd-sourced list of coronavirus-related hackathons</p>
                <br></br>
            </div>
            <div className="col-xl Info-Right">
                <h3 className="Info-Mini-Header">Volunteer Opportunities</h3>
                    <a href="https://helpwithcovid.com/" target="_blank" rel="noopener noreferrer">Help With Covid</a>
                    <p>Connecting volunteers with those in need</p>
                    <a href="https://howwefeel.org/" target="_blank" rel="noopener noreferrer">How We Feel</a>
                    <p>An app to check in on yourself and others</p>
                    <a href="https://covid.mattermore.io/" target="_blank" rel="noopener noreferrer">Mattermore</a>
                    <p>A forum for coronavirus-related projects</p>
                <br></br>
                <h3 className="Info-Mini-Header">Games</h3>
                    <a href="https://docs.google.com/document/d/10iOD7Wy_YU4NmkPU7ZH7YTrq11qJAANjZZ0PAotKhR8/preview" target="_blank" rel="noopener noreferrer">Online Games</a>
                    <p>A Google Doc full of free, online games to play with friends</p>
                <br></br>    
            </div>
            </div>
            <p className="COVID-Compiled">Note: ArchHacks does not affiliate with or endorse any of the above resources.</p>
        </div>
        )
    }
}

export default CovidResourcePage;