import React from 'react'; 
import "./CSS/events.scss";
import Innovation from "./CSS/gallary/events/Innovation.png";
import Finishing from "./CSS/gallary/events/Finishing.png";
import Ultrasonic from "./CSS/gallary/events/Ultrasonic.png";
import Green from "./CSS/gallary/events/Green.png";
import Quality from "./CSS/gallary/events/Quality.png";
import Surface from "./CSS/gallary/events/Surface.png";
import Materials from "./CSS/gallary/events/Materials.png";
import Controlling from "./CSS/gallary/events/Controlling.png";
import Combating from "./CSS/gallary/events/Combating.png";
export default class about extends React.Component{
    render(){
        return (
        
        <div className =  "events">
           <center>  <h2>Workshop</h2></center>
            <div className =  "events_array">
     


                <div className = "event_unit">
                    <img src = {Innovation} alt = "Innovative Products: Conceptualization to Commercialization"/>
                    <h3>Innovative Products: Conceptualization to Commercialization</h3>
                </div>

                <div className = "event_unit">
                        <img src = {Finishing} alt = "Finishing Machining: A State of the Art" />
                        <h3>Finishing Machining: A State of the Art</h3> 
                </div>

                <div className = "event_unit">
                        <img src = {Ultrasonic} alt ="Ultrasonic Machining Approach to Fabricate of Micro channels" />
                        <h3>Ultrasonic Machining Approach to Fabricate of Micro channels</h3>
                </div>

                <div className = "event_unit">
                    <img src = {Green} alt ="A Novel Approach to Processing of Green Composites" />
                    <h3>A Novel Approach to Processing of Green Composites</h3>                
                </div>

                <div className = "event_unit">
                    <img src= {Quality} alt ="Manufacturing Excellence through Quality Assurance" />
                    <h3>Manufacturing Excellence through Quality Assurance</h3>
                </div>

                <div className = "event_unit">
                    <img src ={Surface} alt ="Advances in Surface Finishing Technologies with Special Reference to AFM" />
                    <h3>Advances in Surface Finishing Technologies with Special Reference to AFM</h3>
                </div>

                <div className = "event_unit">
                    <img src = {Materials} alt = "Advanced Materials and Manufacturing" />
                    <h3>Advanced Materials and Manufacturing</h3>
                </div>

                <div className  = "event_unit">
                    <img src = {Controlling} alt ="Controlling Abrasion and Erosion in Cement Plants" />
                    <h3>Controlling Abrasion and Erosion in Cement Plants</h3>
                </div>

                <div className = "event_unit">
                    <img src = {Combating} alt ="Short Term Course on “Combating Wear”" />
                    <h3>Short Term Course on “Combating Wear</h3>
                </div>

                {/*
                <div className = "event_unit">
                    <img src = {Workshop}  alt ="Workshop under the Fulbright Specialist Program"/>
                    <h3>Workshop under the Fulbright Specialist Program</h3> 
                </div>
                */}

            </ div>

            
        </div>

        );
    }
}
