import React from 'react';
import './CSS/home.scss';
import Home_img from "./CSS/gallary/Home.png"

export default class Home extends React.Component {
	componentDidMount = ()=>{
		let height = document.getElementById("head").offsetHeight;
		height = window.innerHeight - height ;
		console.log(height);
		height = height + "px";

		document.getElementById("home_img").style.height =  height
	 
	}
	render() {
		return (
            <div className="home">

                <center> 
				 <img id ="home_img" src = {Home_img}  alt = "MMPL"/>
                </center>
			</div>
		);
	}
}
