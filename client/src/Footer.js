import React from 'react';
import Logo from "./logo.png";
import './LandingPage.css';
import './SchedulePage.css';
import './App.css';

class SchedulePage extends React.Component {
    
    render(){
        return (
            <div className="social_media">
                    <a href="https://github.com/archhacks"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.facebook.com/archhacks/"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://twitter.com/archhacks"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://medium.com/@ArchHacks"><i class="fab fa-medium-m fa-2x"></i></a>
            </div>
        )
    }
}