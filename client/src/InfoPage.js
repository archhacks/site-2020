import React from 'react';
import './App.css';


class InfoPage extends React.Component {
    componentDidMount(){
        var t1 = document.getElementsByClassName("FAQ-General-B")[0];
        var t1a = document.getElementsByClassName("FAQ-General");
        var t2 = document.getElementsByClassName("FAQ-Hacking-B")[0];
        var t2a = document.getElementsByClassName("FAQ-Hacking");
        var t3 = document.getElementsByClassName("FAQ-Logistics-B")[0];
        var t3a = document.getElementsByClassName("FAQ-Logistics");
        t1.addEventListener("click", () => {
            t1.classList.replace("FAQ-Unselected-B","FAQ-Selected-B");
            t2.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            t3.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            Array.prototype.forEach.call(t1a, (t) => {
                t.classList.remove("hide-this");
            })
            Array.prototype.forEach.call(t2a, (t) => {
                t.classList.add("hide-this");
            })
            Array.prototype.forEach.call(t3a, (t) => {
                t.classList.add("hide-this");
            })
        })
        t2.addEventListener("click", () => {
            t2.classList.replace("FAQ-Unselected-B","FAQ-Selected-B");
            t1.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            t3.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            Array.prototype.forEach.call(t2a, (t) => {
                t.classList.remove("hide-this");
            })
            Array.prototype.forEach.call(t1a, (t) => {
                t.classList.add("hide-this");
            })
            Array.prototype.forEach.call(t3a, (t) => {
                t.classList.add("hide-this");
            })
        })
        t3.addEventListener("click", () => {
            t3.classList.replace("FAQ-Unselected-B","FAQ-Selected-B");
            t2.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            t1.classList.replace("FAQ-Selected-B","FAQ-Unselected-B");
            Array.prototype.forEach.call(t3a, (t) => {
                t.classList.remove("hide-this");
            })
            Array.prototype.forEach.call(t2a, (t) => {
                t.classList.add("hide-this");
            })
            Array.prototype.forEach.call(t1a, (t) => {
                t.classList.add("hide-this");
            })
        })
    }
    render() {
        return (
            <div className="InfoPage container-fluid">
                
                <div className="row h-100 Info-Row">
                    <div className="col-xl-5 Info-Col Info-Left">
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
                            <div className="Info-Left-Gutter">
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xl-7 Info-Col Info-Right">
                        <div className="Info-Right-Content">
                            <div className="Info-Right-Gutter"></div>
                            <div className="Info-Right-Thick">
                            
                                <div className="Info-FAQ-Text">
                                    <div className="Info-FAQ-Top-Row">
                                        <h2 className="Info-Header Info-FAQ-Header">FAQ</h2>
                                        <input type="button" value="General" className="Info-FAQ-Select FAQ-General-B FAQ-Selected-B"/>
                                        <input type="button" value="Hacking" className="Info-FAQ-Select FAQ-Hacking-B FAQ-Unselected-B"/>
                                        <input type="button" value="Logistics" className="Info-FAQ-Select FAQ-Logistics-B FAQ-Unselected-B"/>
                                    </div>
                                    <p className="Info-Question FAQ-General">When and where is ArchHacks?</p>
                                    {/* <p className="Info-Answer FAQ-General">ArchHacks will be held from February 28th - March 1st in Anhueser-Busch Hall on the Washington University Campus in St. Louis.</p> */}
                                    <p className="Info-Answer FAQ-General">The time, date, and location of ArchHacks have not yet been announced! Make sure to sign up for the mailing list for updates!</p> 
                                    <p className="Info-Question FAQ-General">Is there a theme to ArchHacks?</p>
                                    <p className="Info-Answer FAQ-General">The theme of ArchHacks is HealthTech! This is an interdisciplinary field combining big strengths of WashU.</p>
                                    <p className="Info-Question FAQ-General">Why Washington University in St. Louis?</p>
                                    <p className="Info-Answer FAQ-General">Both the tech and health communities in St. Louis have recently exploded, making it one of the top ten locations for HealthTech development (The Huffington Post). Our local sponsors are leading players in the health industry in St. Louis and Washington University is among the handful of medical schools leading the nation. St. Louis is a center for developing HealthTech innovations.</p>
                                    <p className="Info-Question FAQ-General">Who can participate?</p>
                                    <p className="Info-Answer FAQ-General">Students from any discipline are welcome to participate in ArchHacks. Teams will ideally consist of a wide range of academic perspectives and creative problem solvers. We encourage people without a coding background to come learn some new skills in workshops, and we encourage those who have been coding since they first met a computer to share their skills. As long as you are interested, willing to contribute ideas, and want to get your hands dirty building a new product you’re set.</p>
                                    <p className="Info-Question FAQ-General">What if information I need is not on the website?</p>
                                    <p className="Info-Answer FAQ-General">Please feel free to send any questions or concerns to <span className="Info-FAQ-Email">info@archhacks.io</span>!</p>
                                    <p className="hide-this Info-Question FAQ-Hacking">Can I start working on The Hack right now?</p>
                                    <p className="hide-this Info-Answer FAQ-Hacking">Woah there, calm down a bit. We’re pumped that you’re excited to be a part of the event, but all work for the Hack must be done within the allotted time at WashU during the event. This keeps things fair for everybody and makes the experience a really rewarding challenge. But we encourage you to develop relevant skills and work on your own fantastic projects ahead of time.</p>
                                    <p className="hide-this Info-Question FAQ-Hacking">What can I do now?</p>
                                    <p className="hide-this Info-Answer FAQ-Hacking">Here’s a few tutorials for getting started in <a href="https://web.archive.org/web/20180601105046/https://developer.apple.com/library/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/">iOS</a>, <a href="https://web.archive.org/web/20180601105046/https://developer.android.com/training/basics/firstapp/index.html">Android</a>, and <a href="https://web.archive.org/web/20180601105046/http://www.tangowithdjango.com/book17/">Web</a> app making. Have some fun and poke around to see if you’re interested in doing more of this kind of stuff. If you are, sweet! We’ll see you in the fall!</p>
                                    <p className="hide-this Info-Question FAQ-Hacking">I don't know any other hackers - what can I do?</p>
                                    <p className="hide-this Info-Answer FAQ-Hacking">No worries! We would never leave you all alone! Once your application has been reviewed and accepted, we will connect you to other participants in order to form teams, or teams can also be formed at the opening dinner if you prefer to wait and shake hands before working with a group.</p>
                                    <p className="hide-this Info-Question FAQ-Hacking">Who owns what I work on?</p>
                                    <p className="hide-this Info-Answer FAQ-Hacking">All IP that is created during the hackathon is yours and is within your rights to use as you please within reason, but we really encourage open sourcing as that is the best way for us all to improve and be able to compound and build on the best ideas.</p>
                                    <p className="hide-this Info-Question FAQ-Logistics">How can I get to ArchHacks?</p>
                                    <p className="hide-this Info-Answer FAQ-Logistics">Cars and buses, and for free! It’s like magic. ArchHacks will provide reimbursement or subsidization for anyone driving in on their own dime. There will also be large busses for colleges with a significant number of participants. Please contact us if you are interested in setting up a bus route, or if you would like to know more about reimbursement.</p>
                                    <p className="hide-this Info-Question FAQ-Logistics">Will there be awards?</p>
                                    <p className="hide-this Info-Answer FAQ-Logistics">Yes, you will be able to win prizes for exceptional awesomeness. Specific prizes and prize categories will be announced closer to the event date, but all our prizes will be based on solving real problems. Therefore, unlike other hackathons, we do not have any API prizes, instead we will be awarding prizes for “Best Hack that Addresses Fitness or Mental Health.” This allows us to award prizes for exceptional overall work, thinking, and problem solving, not just based upon use of a particular product or gluing APIs together.</p>
                                    <p className="hide-this Info-Question FAQ-Logistics">Won't I get hungry?</p>
                                    <p className="hide-this Info-Answer FAQ-Logistics">Yes, yes you will. That is why we will provide regular meals and snacks throughout the entire hackathon from amazing St. Louis vendors. Our specific vendor list to be announced soon.</p>
                                    <p className="hide-this Info-Question FAQ-Logistics">How much does this shindig cost?</p>
                                    <p className="hide-this Info-Answer FAQ-Logistics">For you, nothing! Our wonderful sponsors have made it possible for us to give you a completely free event, food included.</p>
                                    <p className="hide-this Info-Question FAQ-Logistics">What is the water situation?</p>
                                    <p className="hide-this Info-Answer FAQ-Logistics">WashU has a policy banning any non-reusable water bottles on its premises so please bring your own reusable water bottle. There are a bunch of water fountains in every building, but we will not be able to provide you with water bottles.</p>
                                    {/* THIS IS THE OLD FAQ TEXT
                                        REFER TO IT IF U NEED IT
                                    <p className="Info-Question">Why HealthTech?</p>
                                    <p className="Info-Answer">Today the health industry has expanded to incorporate engineering, technology, digital design, and more. We have chosen this theme for ArchHacks because the HealthTech industry is growing exponentially with some of the most innovative technology available today, and we as college students will be the driving force behind this development.</p>
                                    <p className="Info-Question">How can I sponsor ArchHacks?</p>
                                    <p className="Info-Answer">ArchHacks is happily accepting sponsors! If you are interested in sponsoring this event, please reach out to <span className="Sponsors-Email">sponsors@archhacks.io</span>!</p>
                                    <p className="Info-Question">What if information I need is not on the website?</p>
                                    <p className="Info-Answer">Please feel free to reach out to <span className="Info-Email">info@archhacks.io</span> if you have any further questions!</p>
                                    */}
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