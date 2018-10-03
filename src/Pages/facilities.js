import React from 'react'; 
import "./CSS/facilities.css";
import kw_amp from  "./CSS/gallary/kw_amp.jpg";
import Sintering_Furnace from  "./CSS/gallary/Sintering_Furnace.jpg";
import Microwave from  "./CSS/gallary/facilities/microwave.jpg";
import Abrasive from  "./CSS/gallary/facilities/abrasive.jpg";
import Vickers from  "./CSS/gallary/facilities/vickers.jpg";
import Grinding from  "./CSS/gallary/facilities/grinding.jpg";
import Mixer from  "./CSS/gallary/facilities/mixer.jpg";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;



export default class about extends React.Component{
    render(){
        return (
            
        
            <Tabs defaultActiveKey="1">
             

                <TabPane tab="Processing" key="1">
                    <div className = "main_faci">
                        
                            <div className = "Machines">
                                <center> <h4>3KW Microwave Applicator</h4></center>
                                <div >
                                    <div >
                                        <center><img src = {kw_amp} /></center>
                                    </div>
                                    <div >
                                    This applicator can be used to heat the materials for casting, cladding, joining and sintering purposes. Maximum power can be produced 3KW at 2.45GHz frequency and in this applicator whole cavity temperature can be measured with the help of sensor inside the cavity. It is capable to provide rated power as per requirements. 
                                    
                                    </div>
                                </div>
                            </div>
                            <div className = "Machines">
                                <center> <h4>Microwave Sintering Furnace</h4></center>
                                <div >
                                    <div >
                                    <center><img src = { Sintering_Furnace} /></center>
                                    </div>
                                    <div >
                                    This furnace is same as previous one and used to cast, and sinter the metals, ceramics, polymers and composites using microwave energy. This can produce total 1.45KW power at 2.45GHz frequency value. It has infrared sensor located at top of the cavity to measure the temperature of the surface of sample.                             </div>
                                </div>
                            </div>

                            
                            <div className = "Machines">
                                <center> <h4>Domestic Microwave Applicators</h4></center>
                                <div >
                                    <div >
                                    <center><img src = {Microwave}/></center>
                                    </div>
                                    <div >
                                    These are used in machining of the metals, glass and polymers. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     </div>
                                </div>
                            </div>


                              <div className = "Machines">
                                <center> <h4>Powder mixer and blender</h4></center>
                                <div >
                                    <div >
                                    <center><img src = {Mixer}/></center>
                                    </div>
                                    <div >
                                    Application: 
                                            •	Suitable for dry mixing of products in powder form<br />
                                            •	Easy for loading and unloading<br />
                                            •	Easy for cleaning<br />
                                            •	All contact parts are made out of SS quality material, as per customer requirement<br />
                                            •	Simple design requires minimum maintenance<br />
                                            •	General structure & safety guards made out of mild steel & coloured in Standard Model<br />
                                            •	The "V" shape gives sufficient continuous movement to the granules, result in good quality<br />
                                            •	Maximum care has been taken to ensure safe operation of the unit <br />

                                     </div>
                                </div>
                            </div>


                            
                    </div>
                </TabPane>






            <TabPane tab="Characterization" key="2">
                <div className = "main_faci">
                       
                

                <div className = "Machines">
                                <center> <h4>Rubber Wheel Abrasive Wear Test Apparatus </h4></center>
                                <div >
                                    <div >
                                    <center><img src = {Abrasive}/></center>
                                    </div>
                                    <div >
                                    This apparatus is used to test the wear resistance of the specimen. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     </div>
                                </div>
                            </div>


                                <div className = "Machines">
                                        <center> <h4> Micro Vickers hardness Tester</h4></center>
                                    <div >
                                        <div >
                                            <center><img src = {Vickers}/></center>
                                        </div>
                                        <div >
                                        Hardness test Range: 8HV-2900HV<br></br>
                                        Amplification of microscope: 100X for observation and 400X for measurement <br />
                                        Max. Height of specimen: 90mm<br />
                                        Application: To measure the microhardness value for the micro and thin specimens. This is also fit to measure the hardness for hard materials like glass, ceramics etc
                                        </div>
                                </div>


                               </div>




                          <div className = "Machines">
                                <center> <h4> Grinding and Polishing Machine </h4></center>
                                <div >
                                    <div >
                                    <center><img src = {Grinding} /></center>
                                    </div>
                                    <div >
                                    This is used to grind and polish the samples before the characterisation of the specimen like SEM analysis, microstructure study, microhardness testing etc
                                     </div>
                                </div>
                            </div>



                            </div>
            
            </TabPane>


            <TabPane tab= "Workstations" key = "3">
            
            </TabPane>

             <TabPane tab= "Others" key = "4">
            
            </TabPane>


            </Tabs>

             
        );
    }
}