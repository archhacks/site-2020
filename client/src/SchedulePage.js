import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';
import './SchedulePage.css';
import './App.css';



//add schedule element / day components

function SchedElm(props){
    //props obj:
    //props.start: start time
    //props.end: end time
    //props.type: classification
    //props.name: name of event
    //props.loc: location
    return(
        <div className="schedElm">
            <div className="schedData row">
                <div className="schedLeft col-sm">
                    <p className="schedText schedElmTime">{props.start} - {props.end}</p>
                </div>
                <p className="schedText schedElmName col-sm">{props.name}</p>
                <p className="schedText schedElmLoc col-sm">{props.loc}</p>
            </div>
            
        </div>
    )
}

class SchedulePage extends React.Component {

    

    render() {


        return (
            <div className="schedulePage">   
                <div className="schedule">
                    <h1 className="scheduleTitle">Schedule</h1>
                    <input type="button" value="General" className="Info-FAQ-Select FAQ-General-B FAQ-Selected-B"/>
                    <input type="button" value="Hacking" className="Info-FAQ-Select FAQ-Hacking-B FAQ-Unselected-B"/>
                    <input type="button" value="Logistics" className="Info-FAQ-Select FAQ-Logistics-B FAQ-Unselected-B"/>
                    <div className="scheduleInnards">
                        <hr className="schedHR"></hr>
                        <SchedElm start="10:15 PM" end="10:45 PM" name="ArchHacks thing!" loc="WashU"/>
                        <SchedElm start="10:15 PM" end="10:45 PM" name="CTF event" loc="The Great Bear's Den"/>
                        <SchedElm start="10:15 PM" end="10:45 PM" name="leedle lee" loc="The Internet"/>
                        <SchedElm start="10:15 PM" end="10:45 PM" name="Awards" loc="WashU"/>
                    </div>
                </div>
                <div className="social_media">
                        <a href="https://github.com/archhacks"><i class="fab fa-github fa-2x"></i></a>
                        <a href="https://www.facebook.com/archhacks/"><i class="fab fa-facebook fa-2x"></i></a>
                        <a href="https://twitter.com/archhacks"><i class="fab fa-twitter fa-2x"></i></a>
                        <a href="https://medium.com/@ArchHacks"><i class="fab fa-medium-m fa-2x"></i></a>
                </div>
            </div>
        )
    }
}

export default SchedulePage;


