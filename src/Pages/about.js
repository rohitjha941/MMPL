import React from 'react'; 
import "./CSS/about.css"
import Radharaman from "./CSS/gallary/peple/Radharaman.png"
import Shivani from "./CSS/gallary/peple/Shivani.jpg"
import Anurag from "./CSS/gallary/peple/anurag.jpg"
import Gaurav from "./CSS/gallary/peple/gaurav.jpg"
import Lokesh from "./CSS/gallary/peple/lokesh.jpg"
import Dungali from "./CSS/gallary/peple/dungali.jpg"
 
 


export default class about extends React.Component{

 
 
 

    render(){
        return (
            <div className = "Abt">

                <div className = "text"> 
                        <center>       <h3>About</h3></center>
                       
                        <p>Microwave Materials Processing Laboratory (MMPL) is one of the advanced material processing laboratories of the Indian Institute of Technology Roorkee (IITR), Roorkee. The MMPL was established in the Mechanical and Industrial Engineering Department (MIED) in the year 2011 to explore cutting edge research possibilities in the of material processing using microwaves energy at 2.45 GHz. The laboratory is well equipped with the state-of-the-art facilities for processing materials using microwaves at low as well as high temperatures through microwave applicators with flexibility in microwave power levels. Currently, the research focus of the laboratory mainly lies in microwave processing of the most challenging materials i.e. bulk metals; apart from metal powders, polymers, ceramics and composites. The MMPL is the first laboratory in the world to report microwave joining, microwave cladding and in-situ microwave casting of the bulk metals. It has significantly contributed to the literature of the microwave processing of the metallic materials and such data are not abundant worldwide. The MMPL has a dedicated team of researches consisting faculty, research scholars and students. Efforts are on to improve the research facilities and explore new possibilities in the area of microwave processing of metallic materials.</p>
                </div>


                <div className  = "team">
                   <center><h3>Team</h3></center>
                   <h4> Faculty </h4>
                   <div className = "array">
                        <div className = "team_unit">
                                <img alt ="Apurbba Kumar Sharma" src = "http://people.iitr.ernet.in/facultyphoto/akshafme_Dk2qDMR.jpg"/>
                                <div className = "name">Apurbba Kumar Sharma</div>
                        </div>
                   </div>
                    <h4>PHD</h4>

                    <div className = "array2">
                        <div className = "team_unit">
                                <img alt ="Radha Raman Mishra" src = {Radharaman}/>
                                <div className = "name">Radha Raman Mishra</div>
                        </div>
                        
                        <div className = "team_unit">
                                <img alt = "Shivani Gupta" src = {Shivani}/>
                                <div className = "name">Shivani Gupta</div>
                        </div>

                        <div className = "team_unit">
                                <img alt = "Anurag Singh" src = {Anurag}/>
                                <div className = "name">Anurag Singh</div>
                        </div>

                        <div className = "team_unit">
                                <img alt  ="Gaurav Kumar" src = {Gaurav}/>
                                <div className = "name">Gaurav Kumar</div>
                        </div>

                          <div className = "team_unit">
                                <img alt = "Lokesh Saxena" src = {Lokesh}/>
                                <div className = "name">Lokesh Saxena</div>
                        </div>

                          <div className = "team_unit">
                                <img alt ="Dungali Sreehari" src = {Dungali}/>
                                <div className = "name">Dungali Sreehari</div>
                        </div>

                        


                   </div>
 
                </div>

                <div className = "talk">
                <center><h3>Contact</h3></center>

                   <div className= "h3">Address:</div> 
                    Mechanical and Industrial Engineering Department (West Block) <br />
                    Indian Institute of Technology Roorkee Uttarakhand-247667 <br />
                    <div className= "h3">Email:</div> 
                    mmpl.iitr@gmail.com <br />
                    <div className= "h3">Extension:</div> 6620
                
                
                
                </div>

     
                
               





            </div>
        );
        }
    }
