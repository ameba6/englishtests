import React, {Component} from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact-section">
				<ul className="contact-ul">
					<li className="contact-item"><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>root@root.com</li>	
					<li className="contact-item"><i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>(+34) 555 555 555</li>	
				</ul>
			</div>
		)
	}
}
