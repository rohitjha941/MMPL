import React from 'react';
import './CSS/home.scss';
import { Carousel } from 'antd';
import One from "./CSS/gallary/home/1.jpg";
import Two from "./CSS/gallary/home/2.jpg";

export default class Home extends React.Component {
	render() {
		return (
            <div className="home">

                <center> 
				<Carousel autoplay>
					<div>
						 <img src= {One} alt = "one " />
					</div>

                    <div>
						 <img src= {Two} alt = "one " />
					</div>
                
		 
				</Carousel>
                </center>
			</div>
		);
	}
}
