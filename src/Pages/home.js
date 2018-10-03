import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "./CSS/home.css";

import img1 from  "./CSS/gallary/home/Banner.jpg";
import img2 from  "./CSS/gallary/home/img.JPG";
import img3 from  "./CSS/gallary/home/DIC_Banner.jpg";
import new_img from "./CSS/gallary/new.png";
import { runInNewContext } from 'vm';

export default class
 Home extends React.Component{
    render(){
        return (
            <div class = "homes"> 
                <div className = "top">
                   <center> <marquee> <img src = {new_img} ></img> Congraulations to Dr. A K Sharma for becoming the coordinator of Design and Innovation Center IIT Roorkee </marquee> </center>
                </div>

 
                <div class = "font_coursole"> 
                    <center> 
                        <Carousel autoplay >
                                <div><img className= "scroll" src = {img1} /> </div>
                                <div><img className= "scroll" src = {img2} /> </div>
                                <div><img className= "scroll" src = {img3} /> </div>
                        </Carousel>
                    </center>
                 </div>
                

                <div className  = "Welcome_text">
                    <h3> <center>Welcome to Microwave Processing Material Laboratory </center> </h3>
                    Dr Apurbba Kumar Sharma Welcomes you to our website of Microwave Material Laboratory. Our reasearch focuses on processing of materials through microwave energy. Processing includes microwave casting, microwave drilling,  microwave joining,  microwave cladding, microwave sintering etc.
                </div>
            </div>
        );
    }
}
