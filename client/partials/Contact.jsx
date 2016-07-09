import React, {Component} from 'react';

export default class Contact extends Component {
	render() {
		return (
			<nav className="mini-contact">
				<ul>
					<li className="miniContact-item"><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>root@root.com</li>	
					<li className="miniContact-item"><i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>(+34) 555 555 555</li>	
				</ul>
			</nav>
		)
	}
}
