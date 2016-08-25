import React, {Component} from 'react';

export default class Logo extends Component {
	render() {
		let myLogo = "./logos/" + this.props.logo
		return (
					<img className="logo" alt="Your Logo Here" src={myLogo} />
		)
	}
}