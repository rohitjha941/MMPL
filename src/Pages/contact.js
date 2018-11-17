import React from 'react'; 
import "./CSS/contact.css";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const google = window.google


export default class about extends React.Component{
 
    
    render(){
      

        return (
            <div class = "contact">
                <strong>Address:</strong> <br />
                    Mechanical and Industrial Engineering Department (West Block) <br />
                    Indian Institute of Technology Roorkee Uttarakhand-247667 <br />
                    <strong>Email:</strong> <br />
                    mmpl.iitr@gmail.com <br />
                    <b>Extension </b> : <br />6620
                     <div style={{ height: ' 40rem', width: '100%' }}>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyC39MKVZINt5RP2nleAvjUkBmPJapdSd4k'}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text={'Kreyser Avrora'}
                            />
                            </GoogleMapReact>
                        </div>
            </div>

        );
    }
}