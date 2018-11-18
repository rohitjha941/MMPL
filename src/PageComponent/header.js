import React from 'react'; 
import   "./CSS/header.css";
import  {NavLink  } from "react-router-dom"
import { withRouter } from 'react-router-dom';
 
 

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
                           
                                
                            </ul>
                    </div>               
                 
                


                    <div className= "Mobile_Menu_Button">
                    
                    <i class="fas fa-bars fa-2x" id = "menu_button" onClick = {this.handle_menu}></i>
                        <i class="fas fa-times fa-2x" id = "close_button" onClick = {this.hide_menu}></i>
                    </div>

                    <div class =  "Mobile_Menu">

                     <table>
                    <tr>
                        <td >
                        <NavLink  onClick = {this.hide_menu} exact to ="/"> Home</NavLink>

                        </td>
                    </tr>

                     <tr>
                        <td>
                        <NavLink onClick = {this.hide_menu} to ="/about"> About</NavLink>
                            
                        </td>
                    </tr>


                     
                     
                </table>
                
                    </div>
            </div>
          
        );
    }
}


export default withRouter(Header);

 
 
 