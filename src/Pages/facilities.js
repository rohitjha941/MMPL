import React from "react";
import "./CSS/facilities.scss";
import kw_amp from "./CSS/gallary/kw_amp.jpg";
import Sintering_Furnace from "./CSS/gallary/Sintering_Furnace.jpg";
import Microwave from "./CSS/gallary/facilities/microwave.jpg";
import Abrasive from "./CSS/gallary/facilities/abrasive.jpg";
import Vickers from "./CSS/gallary/facilities/vickers.jpg";
import Grinding from "./CSS/gallary/facilities/grinding.jpg";
import Mixer from "./CSS/gallary/facilities/mixer.jpg";
import Optical from "./CSS/gallary/facilities/optical.jpg";
import Press from "./CSS/gallary/facilities/press.jpg";
import Ultrasonic from "./CSS/gallary/facilities/Ultrasonic.jpg"
 

export default class about extends React.Component {
  render() {
    return (
      <>
        <center>
          <h3 className="faci_h3"> Processing Facilities</h3>
        </center>

        <div className="main_faci">
          <div className="Machines">
            <center>
 
              <h4>3KW Microwave Applicator</h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={kw_amp} />
                </center>
              </div>
              <div>
              This applicator can generate CW (Continuous-Wave) microwaves of 3 kW or pulsed with duty selection from 10% to 90% in 10 steps at 2.45 GHz frequency. It has in-built camera, temperature and power sensors. This applicator can be used for processes such as melting, casting, cladding, joining, drilling, sintering, etc.
              </div>
            </div>
          </div>

          <div className="Machines">
            <center>
 
              <h4>Microwave Sintering Furnace</h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Sintering_Furnace} />
                </center>
              </div>
              <div>
              This furnace works on 230 volts and 5 KVA input power to produce microwaves of power up to 1.4 kW at 2.45 GHz frequency. Applicator cavity is water cooled to prevent the overheating of the furnace. It has infrared sensor located at top of the cavity to measure the temperature of the surface of target material. Furnace can be employed to cast and sinter the metals, ceramics, polymers and composites.
              </div>
            </div>
          </div>

          <div className="Machines">
            <center>
 
              <h4>900 W Microwave Applicators</h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Microwave} />
                </center>
              </div>
              <div>
              This is low power applicator can generate microwaves of 900 W output power at 2.45 GHz frequency. It has five power levels (90 W-180 W-360 W-600W-900 W) corresponding to five duty cycle. This applicator facilitates automatic shut off and air vent cooling to prevent overheating of the cavity. Applicator can be used for processes such as drilling, sintering, joining, cladding, etc. 
              </div>
            </div>
          </div>

          <div className="Machines">
            <center>
      
              <h4>Powder mixer and blender</h4>
            </center>
            <div>
              <div>
                <center>
                  <img style={{ width: "auto", height: "35rem" }} src={Mixer} />
                </center>
              </div>
              <div>
              This V type powder mixer is suitable for mixing dry powders of different compositions with uniform distribution. Mixer can be operate at 220 V with minimum rpm of 10. This is used generally to mix the metallic and non-metallic powder for powder metallurgy (PM) processes to make the green compact.
              </div>
            </div>
          </div>
        
          <div className="Machines">
            <center>
      
              <h4>Hydraulic Press</h4>
            </center>
            <div>
              <div>
                <center>
                  <img  src={Press} />
                </center>
              </div>
              <div>
              This facilitates the processing of mixed powder to make cylindrical pallet. Various die can be used to make the compacts by applying maximum pressure capacity of 12 MPa. 
              </div>
            </div>
          </div>
       
          <div className="Machines">
            <center>
      
              <h4>Micro Ultrasonic Machining Setup</h4>
            </center>
            <div>
              <div>
                <center>
                  <img  src={Ultrasonic} />
                </center>
              </div>
              <div>
              This micro-ultrasonic machining setup developed in-house, works at a frequency of 20 kHz, amplitude up to 40 µm and power of 800 W. The setup is capable of machining high aspect ratio micro-holes, micro-slots and 3D micro channels on hard and brittle materials such as glass, silicon, ceramics, etc. 
              </div>
            </div>
          </div>
       
        </div>

        <center>
          <h3 className="faci_h3"> Characterization Facilities</h3>
        </center>
        <div className="main_faci">
          <div className="Machines">
            <center>
     
              <h4>Rubber Wheel Abrasive Wear Test Apparatus </h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Abrasive} />
                </center>
              </div>
              <div>
              This apparatus is used to test the wear resistance of the specimen at various rpm and load conditions. It operates at 220 AC volts and 50 Hz frequency input power.
              </div>
            </div>
          </div>

          <div className="Machines">
            <center>
      
              <h4> Micro Vickers hardness Tester</h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Vickers} />
                </center>
              </div>
              <div>
               This tester measures the micro hardness value of specimens having maximum height of 80 mm. Hardness measuring ranges from 8 HV-2900 HV which make it capable to determine the hardness of hard materials such as ceramic and glass. In-built microscope is able to magnify the indentation up to 100X for observation and 400X for measurement purpose.</div>
            </div>
          </div>

          <div className="Machines">
            <center>
 
              <h4> Grinding and Polishing Machine </h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Grinding} />
                </center>
              </div>
              <div>
              This Machine is used to grind and polish the samples for characterisation analysis such as scanning electron microscope analysis, microstructure analysis, microhardness testing etc.  </div>
            </div>
          </div>
        
          <div className="Machines">
            <center>
 
              <h4> Optical Microscope </h4>
            </center>
            <div>
              <div>
                <center>
                  <img src={Optical} />
                </center>
              </div>
              <div>
              This optical microscope is used to analyse the surface features of samples of various materials. Magnification power of microscope ranges from 100 X to 500 X and magnified image can be stored through inbuilt CCD camera. </div>
            </div>
          </div>
        
        
        </div>
      </>
    );
  }
}
