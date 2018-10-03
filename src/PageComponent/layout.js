import React from 'react';
import Header from "./header"
import Footer from "./footer"

export default class Layouts extends React.Component{
    render(){
        return (
            <div>
                <Header />
                
                <div className = "main">
               
                {this.props.children}
                    
                </div>
                <Footer/>
            </div>
        );
    }
}