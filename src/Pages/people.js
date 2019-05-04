import React, { Component } from 'react';
import Radharaman from './CSS/gallary/peple/radharaman.jpg';
import Shivani from './CSS/gallary/peple/shivani.jpg';
import Anurag from './CSS/gallary/peple/anurag.jpg';
import Gaurav from './CSS/gallary/peple/gaurav.jpg';
import Lokesh from './CSS/gallary/peple/lokesh.jpg';
import Dungali from './CSS/gallary/peple/dungali.jpg';
import Mudimallana from './CSS/gallary/peple/mudimallana.jpg';
import Sunny from './CSS/gallary/peple/sunny.jpg';
import Nitin from './CSS/gallary/peple/nitin.jpg';
import Gudipadu from './CSS/gallary/peple/gudipadu.jpg';
import Manjot from './CSS/gallary/peple/manjot.jpg';
import Amit from './CSS/gallary/peple/amit.jpg';
import Jawalkar from './CSS/gallary/peple/jawalkar.jpg';
import Vivek from './CSS/gallary/peple/vivek.jpg';
import Dheeraj from './CSS/gallary/peple/dheeraj.jpg';
import Srinath from './CSS/gallary/peple/srinath.jpg';
import Rajesh from './CSS/gallary/peple/rajesh.jpg';
import './CSS/team.scss';

import { Modal, Button } from 'antd';

export default class People extends Component {
	state = {
		 visible: false ,
		 name :"",
		 photo:"",
		 title :"",
		 url:"",
		 presently:"",

		 
		
		};

	showModal = (nme ,title,status,presently,url,photo) => {
		this.setState({
			name:nme,
			title:title,
			photo:photo,
			url: url,
			status:status,
			presently:presently,
			visible: true
		});
 
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div>
				<div className="team">
					<center>
						<h3>Team</h3>
					</center>
					<h4> Faculty </h4>
					<div className="array">
					<a target= "_blank" rel="noopener noreferrer" href = "https://www.iitr.ac.in/departments/ME/pages/People+Faculty+akshafme.html"> 
						<div className="team_unit">
							<img
								alt="Apurbba Kumar Sharma"
								src="http://people.iitr.ernet.in/facultyphoto/akshafme_3.jpg"
							/>
							<div className="name">Apurbba Kumar Sharma</div>
						</div>
						</a>
					</div>
					<h4>PHD</h4>

					<div className="array2">
						<div 
							className="team_unit"
							onClick = {() => this.showModal(
								"Shivani Gupta",
								"Microwave Sintering of Biomaterials for Orthopaedic Implants ",
								"July, 2017 – Ongoing",
								"IIT Roorkee",
								"https://www.researchgate.net/profile/Shivani_Gupta44 ",
								'peple/Shivani.jpg'
								
							)}
						
						>
							<img alt="Shivani Gupta" src={Shivani} />
							<div className="name">Shivani Gupta</div>
						</div>

						<div className="team_unit">
							<img alt="Anurag Singh" src={Anurag} />
							<div className="name">Anurag Singh</div>
						</div>

						<div className="team_unit">
							<img alt="Gaurav Kumar" src={Gaurav} />
							<div className="name">Gaurav Kumar</div>
						</div>

						<div className="team_unit">
							<img alt="Dungali Sreehari" src={Dungali} />
							<div className="name">Dungali Sreehari</div>
						</div>
					</div>

					<div className="alumini">
						<center>
							<h3>Alumini</h3>
						</center>

						<div className="array2">
							<div className="team_unit">
								<img alt="Radha Raman Mishra" src={Radharaman} />
								<div className="name">Radha Raman Mishra</div>
							</div>

							<div className="team_unit">
								<img alt="Lokesh Saxena" src={Lokesh} />
								<div className="name">Lokesh Saxena</div>
							</div>

							<div className="team_unit">
								<img alt="Mudimallana Goud" src={Mudimallana} />
								<div className="name">Mudimallana Goud</div>
							</div>

							<div className="team_unit">
								<img alt="Gudipadu Venkatesh" src={Gudipadu} />
								<div className="name">Gudipadu Venkatesh</div>
							</div>

							<div className="team_unit">
								<img alt="Manjot Singh Cheema" src={Manjot} />
								<div className="name">Manjot Singh Cheema</div>
							</div>

							<div className="team_unit">
								<img alt="Nitin Kumar Lautre" src={Nitin} />
								<div className="name">Nitin Kumar Lautre</div>
							</div>

							<div className="team_unit">
								<img alt="C. S. Jawalkar" src={Jawalkar} />
								<div className="name">C. S. Jawalkar</div>
							</div>

							<div className="team_unit">
								<img alt="Vivek Jain" src={Vivek} />
								<div className="name">Vivek Jain</div>
							</div>

							<div className="team_unit">
								<img alt="Dheeraj Gupta" src={Dheeraj} />
								<div className="name">Dheeraj Gupta</div>
							</div>

							<div className="team_unit">
								<img alt="M S Srinath" src={Srinath} />
								<div className="name">M S Srinath</div>
							</div>

							<div className="team_unit">
								<img alt="Rajesha S" src={Rajesh} />
								<div className="name">Rajesha S</div>
							</div>

							<div className="team_unit">
								<img alt="Sunny Zafar" src={Sunny} />
								<div className="name">Sunny Zafar</div>
							</div>

							<div className="team_unit">
								<img alt="Amit Bansal" src={Amit} />
								<div className="name">Amit Bansal</div>
							</div>
						</div>
					</div>
				</div>


				       <Modal
							title={this.state.name}
							visible={this.state.visible}
							onCancel={this.handleCancel}
							footer = {null}
						>
							<div className = "modal_class"> 
									<center>
										<img src = {this.state.photo} ></img>
									</center>
									<br />
									<br />
									<br />
									<br />
								<div className = "data_tabel">
									<div> PHD Title</div>
									<div>{this.state.title}</div>
								</div>

								<div className = "data_tabel">
									<div> Status</div>
									<div>{this.state.status}</div>
								</div>

								<div className = "data_tabel">
									<div> Presently</div>
									<div>{this.state.presently}</div>
								</div>

								<div className = "data_tabel">
									<div> ResearchGate</div>
									<div><a href = {this.state.url} >{this.state.url}</a></div>
								</div>
							</div>
         
        				</Modal>
			</div>



							
		);
	}
}
