import React, {Component} from 'react';

export default class Logo extends Component {
	render() {
		let myLogo = "./logos/" + this.props.logo
		return (
			<div>
				<a href="/">
					<img alt="Your Logo Here" 
					src={myLogo}
					width="150"/>
				</a>
			</div>
		)
	}
}