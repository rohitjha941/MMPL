import React from 'react'; 
import   "./CSS/footer.scss";
import iitr from "../Pages/CSS/gallary/iitr.png";
export default class Footer extends React.Component{
    render(){
        return (
            <div className = "foot">
            <div>
                    <table> 
                        <tr>
                             <td> 
                                <img src = {iitr} />
                            </td> 
                           
                        </tr>
                     </table>
            

            </div>

              
       
                <div class = "links">
                        <h4>Important Links</h4> 
                        <ul>
                            <li> <a href = "HTTP://iitr.ac.in">IIT Roorkee</a></li>
                            <li><a href = "http://dst.gov.in/">DST</a></li>
                            <li><a href ="https://www.ieee.org/">IEEE</a></li>
                            <li><a href = "http://csirhrdg.res.in/">CSIR</a></li>
                        </ul>
                </div>
            {/*
                <div class = "links">
                        <h4>Follow</h4> 
                        <ul>
                            <li> <a href = "">Linkden</a></li>
                            <li><a href = "">Facebook</a></li> 
                        </ul>
                </div>
            */}
                <div className = "dwn">

                    <h4>Address</h4>
                    <p> 
                                Microwave Materials Processing Laboratory,<br />
                                Mechanical & Industrial Engineering Department,<br /> 
                                Indian Institute of Technology, Roorkee.<br />
          
                    </p>   
                </div>
            </div>


        );

        }
    }
