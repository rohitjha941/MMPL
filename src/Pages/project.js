import React from 'react'; 
import "./CSS/research.scss"
import 'antd/dist/antd.css'; 
 
export default class about extends React.Component{
    render(){
        return (
            <div className ="research">
             
                    <div className = "Project">
                  <table className = " table table-hover table-responsive">
                        <tr>
                            <th>
                                Title
                            </th>

                            <th>
                                Sponsoring Agency
                            </th>


                            <th>
                            Period      
                            </th>
                            
                            
                            <th>
                            Amount(Rs in lakhs)
                            </th>

                            <th>Achievements</th>

                        </tr>

        
                        <tr>
                            <td>
                            Materials Joining and Drilling with Microwaves
                            </td>

                            <td>
                            BRNS, Mumbai (DAE, Govt. of India).
                            </td>

                            <td>
                            February 18, 2011- March 31, 2016
                            </td>

                            <td>
                            31,73,025
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Parametric studies during Machining of Micro-channels on Silicon Wafer using Micro Ultrasonic Machining
                            </td>
                            
                            <td>
                            Council of Scientific and Industrial Research (CSIR), New Delhi, India
                            </td>

                            <td>
                            June 26, 2011- March 31, 2015
                            </td>

                            <td>
                            13,00,000
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Development and Parametric Study of Ultrasonically Assisted Abrasive Flow Machining (UAAFM) for Precision Finishing
                            </td>

                            <td>
                            DST, New Delhi, India.
                            </td>

                            <td>
                            August  22, 2008- March 31, 2012
                            </td>

                            <td>
                            20,40,000       
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Microwave Joining of Metals
                            </td>

                            <td>
                            IIT Roorkee, Roorkee, India.
                            </td>

                            <td>
                            Sept., 2006- March 31, 2008
                            </td>

                            <td>
                            1,00,000
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Development and Parametric study of Grinding Assisted Electrochemical Discharge Machining.
                            </td>

                            <td>
                            DST, New Delhi, India.
                            </td>

                            <td>
                            February 18, 2013- February 17, 2016
                            </td>

                            <td>
                            35,00,000
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Parametric studies during Machining of Glass and Metal Matrix Composite  (Al-7075) using Electrochemical Discharge Machining (ECDM)
                            </td>

                            <td>
                            Council of Scientific and Industrial Research, New Delhi, India.
                            </td>

                            <td>
                            May 07, 2012- May 06, 2015
                            </td>

                            <td>
                            6,50,000
                            </td>

                            <td>
                            Completed
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
}
