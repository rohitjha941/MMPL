import React from 'react'; 
import "./CSS/events.css";
import Workshop  from "./CSS/gallary/events/workshop.jpg"
export default class about extends React.Component{
    render(){
        return (
        
        <div className =  "events">
           <center>  <h2>Workshop</h2></center>
            <div className =  "events_array">
                <div className = "event_unit1">
                    <h3>Workshop under the Fulbright Specialist Program</h3> 
                    <img src = {Workshop}  alt ="Workshop under the Fulbright Specialist Program"/>
                    <p>Indian Institute of Technology Roorkee hosted a Fulbright Specialist “Professor, Dinesh Agrawal, Ph. D., from The Pennsylvania State University, USA under the Fulbright Specialist Program sponsored by the U.S. Department of State, USA. The program was coordinated by the World Learning, USA, and The United States-India Educational Foundation (USIEF), New Delhi. A workshop was organised on “Microwave Processing of Materials: Challenges and Opportunities” from 22.05.2018 to 23.05.2018 during the visit of the Fulbright Specialist at IIT Roorkee during May 13, 2018 to May 28, 2018. The invited researchers from different Indian institutes/organizations participated in the workshop and interacted with the eminent scientist Prof. Agrawal. </p>
                </div>
            </ div>

            
        </div>

        );
    }
}
