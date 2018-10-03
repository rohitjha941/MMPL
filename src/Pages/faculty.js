import React from 'react'; 
import "./CSS/people.css"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;



export default class about extends React.Component{ 
    render(){
        return (
            <div>

                <div class = "people_class">
                                
                                <div>
                                    <center>
                                        <img src = "http://people.iitr.ernet.in/facultyphoto/akshafme_Dk2qDMR.jpg"/>
                                        <br />
                                        Professor-In-Charge
                                        
                                        </center>
                                </div>

                                <div>
                                <center> <h2>Apurbba Kumar Sharma , Ph.D.</h2></center>

                                Dr. Apurbba Kumar Sharma, currently an Associate Professor in the Department of Mechanical and Industrial Engineering at the Indian Institute of Technology Roorkee, India. He has obtained his Bachelor degree from Dibrugarh University, Assam. He has subsequently obtained his Masters and Ph. D. degrees from IIT Madras. He has supervised eleven doctoral programs and completed five externally  funded research projects. He has published more than 105 research articles in reputed journals and presented/published more than 110 research papers in various International and National Conferences. He has also filed seven patents in India. Dr. Sharma is also a reviewer of several reputed international journals including – Journal of Microwave Power and Electromagnetic Energy, Journal of Manufacturing Processes, Journal of Advanced Manufacturing Technology, Composites Part A: Applied Science and Manufacturing, Alloys and Compound, Proceedings of the IMechE Part B: Journal of Engineering Manufacture, Proceedings of the IMechE Part E: Journal of Process Mechanical Engineering and Surface and Coatings Technology, International Journal of Metal Casting, Surface Engineering and Kovové Materiály-Metallic Materials. Prof. Sharma has contributed one full chapter on invitation titled “Electrochemical Discharge Machining” in the Handbook on ‘Design for Advanced Manufacturing: Technology and Processes’ published by McGraw Hill Education. He has also edited one International Conference Proceedings. He has developed a Full Web-based Video Course on “Advanced Manufacturing Processes” under the NPTEL Programme of the Government of India. He has chaired several technical sessions in International conferences. His prime research interests include – advanced machining, micro machining and finishing, and microwave material processing. Dr. Sharma is a DAAD fellow. He is involved with several professional bodies and is associated as - Fellow of the Institution of Engineers (India), Member, ASME (USA), Member SME (USA), Member GSTF (Singapore), Member MRS (India), Member IIIE (India) and Member ISTE, New Delhi                     
                                </div>


                 </div>
                            
                <div id ="space"> </div>

                </div>
        );
    }
}