import React, {Component} from 'react';

export default class User extends Component {
	render() {
		let faIcon = "fa-user";
		return(
			<div className="user-section">
					<i className={"userIco fa " + faIcon + " fa-lg fa-fw"} aria-hidden="true" ></i>
			</div>
		)
	}
}