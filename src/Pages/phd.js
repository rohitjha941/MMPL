import React from 'react'; 
import "./CSS/people.css"
import Radharaman from "./CSS/gallary/peple/Radharaman.png"
 
 



export default class about extends React.Component{ 
    render(){
        return (
            <div>
        
                
                <div className = "people_class phd">
                                    
                    <div>
                        <center>
                            <img src = {Radharaman}/>                        
                        </center>
                    </div>
                    <div>
                        <center> <h2> Radha Raman Mishra</h2></center> <br></br>
                         Radha Raman Mishra is a doctoral student in the Department of Mechanical and Industrial Engineering at the Indian Institute of Technology Roorkee, Roorkee, India with MHRD research fellowship. He is pursuing research on ‘in-situ microwave casting technique’ under the supervision of Prof. Apurbba Kumar Sharma, Associate Professor in the same Department. He has obtained his Master degree form Indian Institute of Technology BHU, Varanasi, India. He has published 15 journal articles and contributed 13 papers in various international and national conferences. He has filed one Indian Patent. One of his research papers was awarded the ‘best paper’ in the International Conference CETCME-2015, Greater Noida. He was awarded ‘Young Scientist International Travel Support’ by SERB, DST, Government of India and ‘Travel Support’ by IIT Roorkee to present his research in the International Conference ‘UIE-2017’ at Hannover, Germany. His research interests include microwave processing of materials and composites.
                    </div>
                </div>

            </div>


            );
        }
    }