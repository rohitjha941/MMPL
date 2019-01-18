import React from 'react'; 
import   "./CSS/header.scss";
import  {NavLink  } from "react-router-dom"
import { withRouter } from 'react-router-dom';
 
 

 class Header extends React.Component{
 
    render(){
        return (
            
                <div className = "head"> 
                    <div>
                         <h3> Microwave Materials Processing Laboratory  </h3>
                    </div> 
                    <div  className= "navigation">
                  
                                <ul  className="nav justify-content-end">

                                <li  className="nav-item">
                                <NavLink exact to ="/"> Home</NavLink>
                                </li>
                                <li  className="nav-item">
                                    <NavLink to ="/about"> About</NavLink>
                                </li>
                           
                                <li  className="nav-item">
                                    <NavLink to ="/events"> Events</NavLink>
                                </li>
                                
                                <li  className="nav-item">
                                    <NavLink to ="/facilities">Facilities</NavLink>
                                </li>

                                 <li  className="nav-item">
                                    <NavLink to ="/papers">Publications</NavLink>
                                </li>


                                 <li  className="nav-item">
                                    <NavLink to ="/patents">Patents</NavLink>
                                </li>


                                 <li  className="nav-item">
                                    <NavLink to ="/projects">Projects</NavLink>
                                </li>

                                  <li  className="nav-item">
                                    <NavLink to ="/people">People</NavLink>
                                </li>
                            </ul>
                    </div>               
                 
                

  
            </div>
          
        );
    }
}
 

export default withRouter(Header);

 
 
 