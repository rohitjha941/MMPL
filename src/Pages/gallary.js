import React from 'react'; 
import "./CSS/gallary.css"



import img1 from "./CSS/gallary/gallary/1.JPG";
import img2 from "./CSS/gallary/gallary/2.JPG";
import img3 from "./CSS/gallary/gallary/3.JPG";
import img4 from "./CSS/gallary/gallary/4.JPG";
import img5 from "./CSS/gallary/gallary/5.JPG";
import img6 from "./CSS/gallary/gallary/6.JPG";
import img7 from "./CSS/gallary/gallary/7.jpg";
import img8 from "./CSS/gallary/gallary/8.jpg";
import img9 from "./CSS/gallary/gallary/9.jpg";
import img10 from "./CSS/gallary/gallary/10.jpg";
import img11 from "./CSS/gallary/gallary/11.jpg";
import img12 from "./CSS/gallary/gallary/12.jpg";
import img13 from "./CSS/gallary/gallary/13.jpg";
import img14 from "./CSS/gallary/gallary/14.jpg";
 
 
 




export default class about extends React.Component{
    render(){
        return (

            <center> 
                <div className = "gal">
                    
                       <div> 
                            <img src = {img1}></img>
                        </div>

                        <div> 
                            <img src = {img2}></img>
                        </div>
                        <div> 
                            <img src = {img3}></img>
                        </div>
                        <div> 
                            <img src = {img4}></img>
                        </div>
                        <div> 
                            <img src = {img5}></img>
                        </div>
                        <div> 
                            <img src = {img6}></img>
                        </div>
                       
                        <div> 
                            <img src = {img9}></img>
                        </div>
                        <div> 
                            <img src = {img10}></img>
                        </div>
                        <div> 
                            <img src = {img11}></img>
                        </div>
                        <div> 
                            <img src = {img12}></img>
                        </div>
                        
                        <div> 
                            <img src = {img13}></img>
                        </div>
                        
                        <div> 
                            <img src = {img14}></img>
                        </div>
                        <div> 
                            <img src = {img7}></img>
                        </div>
                        <div> 
                            <img src = {img8}></img>
                        </div>
                        
                        

                </div>
            </center>
        );
    }
}
