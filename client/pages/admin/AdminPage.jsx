import React, {Component} from 'react';

export default class Hello extends Component {
	render() {
		console.log(this.props.page);
		return(
			<div className="">
				<ul>
					<li>AdminHello.... :)    AdminHello.... :)    AdminHello.... :)</li>
					<li>AdminHello.... :)    AdminHello.... :)   AdminHello.... :)</li>
				</ul>
			</div>
		)
	}
}