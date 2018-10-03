import React from 'react'; 
import   "./CSS/header.css";
import  {NavLink ,BrowserRouter } from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

const People_Menu = (
    <Menu>
            <Menu.Item key="Faculty"> <NavLink to ="/faculty">Principle Investigator</NavLink> </Menu.Item>
            <Menu.Item key="phd"> <NavLink to ="/phd">Ph.D</NavLink></Menu.Item>
            <Menu.Item key=" ">M.Tech</Menu.Item>
            <Menu.Item key=" ">B.Tech</Menu.Item>
    </Menu>
  ); 

  
const Research_Menu  = (
    <Menu>
        <Menu.Item key = "Publications"><NavLink to =  "/publications">Publications</NavLink> </Menu.Item>
        <Menu.Item key = "Projects"><NavLink to =  "/projects">Projects</NavLink> </Menu.Item>
        <Menu.Item key = "Patents"><NavLink to =  "/patents">Patents</NavLink> </Menu.Item>
        <Menu.Item key = "Collabrations"><NavLink to =  "/collabrations">Collabrations</NavLink> </Menu.Item>
    </Menu>
);
 class Header extends React.Component{
    handle_menu()
    {
        document.getElementsByClassName("Mobile_Menu")[0].style.display = "block";
        document.getElementById("close_button").style.display = "block";
        document.getElementById("menu_button").style.display = "none";
    }

    hide_menu()
    {
        document.getElementsByClassName("Mobile_Menu")[0].style.display = "none";
        document.getElementById("close_button").style.display = "none";
        document.getElementById("menu_button").style.display = "block";

    }
    render(){
        return (
            <div>
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
                                    <Dropdown overlay={People_Menu}>
                                        <a className="ant-dropdown-link" href="#">
                                        People <Icon type="caret-down" theme="filled" />
                                        </a>
                                    </Dropdown>
                                </li>

                                <li  className="nav-item">
                                   <NavLink to ="/facilities">Facilities</NavLink>
                                </li>
                           

                                  <li  className="nav-item">
                                    <Dropdown overlay={Research_Menu}>
                                        <a className="ant-dropdown-link" href="#">
                                        Research <Icon type="caret-down" theme="filled" />
                                        </a>
                                    </Dropdown>
                                </li>

                                <li  className="nav-item">
                                     <NavLink to ="/events">Events</NavLink>
                                </li>
                                <li  className="nav-item">
                                <NavLink to ="/gallary">Gallery </NavLink>
                                </li>
                                <li  className="nav-item">
                                <NavLink to ="/contact">Contact </NavLink>
                                </li>
                            
                            </ul>
                         </div>               
                


                <div className= "Mobile_Menu_Button">
                    <i class="fas fa-bars fa-2x" id = "menu_button" onClick = {this.handle_menu}></i>
                    <i class="fas fa-times fa-2x" id = "close_button" onClick = {this.hide_menu}></i>
                </div>

                <div class =  "Mobile_Menu">
                <table>
                    <tr>
                        <td>
                        <NavLink exact to ="/"> Home</NavLink>

                        </td>
                    </tr>

                     <tr>
                        <td>
                        <NavLink to ="/about"> About</NavLink>
                            
                        </td>
                    </tr>


                    <tr>
                        <td>

                             <NavLink to ="/people">People</NavLink>
                        </td>
                    </tr>
                     <tr>
                        <td>
                        <NavLink to ="/facilities">Facilities</NavLink>
                            
                        </td>
                    </tr>

                     <tr>
                        <td>
                        <NavLink to ="/research">Research</NavLink>
                            
                        </td>
                    </tr>


                     <tr>
                        <td>

                              <NavLink to ="/events">Events</NavLink>
                        </td>
                    </tr>

                     <tr>
                        <td>

                             <NavLink to ="/gallary">Gallery </NavLink>
                        </td>
                    </tr>

                    
                    <tr>
                        <td>

                             <NavLink to ="/contact">Contact</NavLink>
                        </td>
                    </tr>
                     
                </table>
                
                </div>
            </div>
            </div>
        );
    }
}


export default withRouter(Header);

 
 
 