import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import  {NavLink,withRouter} from "react-router-dom"
import   "./CSS/header2.css";



class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless inverted borderless stackable fixed = "top" color = "blue" >

        <NavLink to = "/" >
            <Menu.Item>
            Microwave Materials Processing Laboratory  
            </Menu.Item>
        </NavLink>

        <Menu.Menu position ="right">
                <NavLink to = "/">
                    <Menu.Item  
                        name='home' 
                        active={activeItem === 'home'}
                        onClick={
                        this.handleItemClick
                        }  
                    />

                </NavLink>
           
                <NavLink to ="/about"> 
                    <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
             
        </Menu.Menu>
      </Menu>
    )
  }
}




export default withRouter(MenuExampleInverted);