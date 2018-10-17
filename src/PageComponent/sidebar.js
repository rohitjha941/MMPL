import React from 'react'; 
import  {NavLink} from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import "./CSS/sidebar.css"

class Sidebar extends React.Component{
    render(){
        return (
            <div className = "side">
                <NavLink to =  "/publications">Publications</NavLink> <br></br>
                <NavLink to =  "/projects">Projects</NavLink> <br />
                <NavLink to =  "/patents">Patents</NavLink> <br />
                <NavLink to =  "/collabrations">Collabrations</NavLink> <br />
 
            </div>

        )
    }
}
export default withRouter(Sidebar);


