import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<div>
				<center>
					<h3 className = "title">{this.props.title}</h3>
				</center>
			</div>
		);
	}
}
