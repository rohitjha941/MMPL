import React from 'react'; 
import   "./CSS/footer.scss";
export default class Footer extends React.Component{
    render(){
        return (
            <div className = "foot">
            <div>
                    <table> 
                        <tr>
                             <td> 
                                <img src = "https://www.iitr.ac.in/departments/ECE/uploads/Image/IITR%20New%20LOGO/IITR_New_Logo_Black.png"/>
                            </td> 
                            <td>
                                Microwave Materials Processing Laboratory,<br />
                                Mechanical & Industrial Engineering Department,<br /> 
                                Indian Institute of Technology, Roorkee.<br />
                                <a href = "mailto:mmpl.iitr@gmail.com">
                                     <i class="fa fa-envelope" aria-hidden="true"></i> mmpl.iitr@gmail.com
                                </a>
                            </td>
                        </tr>
                     </table>
            

            </div>

                 {/*
       
                <div class = "links">
                        <h4>Important Links</h4> 
                        <ul>
                            <li> <a href = "HTTP://iitr.ac.in">IIT Roorkee</a></li>
                            <li><a href = "http://dst.gov.in/">DST</a></li>
                            <li><a href ="https://www.ieee.org/">IEEE</a></li>
                            <li><a href = "http://csirhrdg.res.in/">CSIR</a></li>
                        </ul>
                </div>


                <div class = "dwn">

                            <h4>Updates </h4> 
                            <ol>
                                <li>
                                Prof. Apurbba Kumar Sharma is appointed coordinator, Design Innovation Center, IIT Rookee
                                </li>
                                <li>
                                Mr. Radha Raman Mishra has defended his Ph. D. viva-voice. 
                                </li>
                                <li>
                                Prof. Dinesh Agrawal, Penn State University, USA visited MMP Lab in May 2018.
                                </li>
                            </ol>
                            
                 </div>*/}

           
            </div>


        );

        }
    }
