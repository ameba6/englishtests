import React, {Component} from 'react';

export default class Social extends Component {
	render() {
		return (
			<nav className="social-nav" ref="container">
				<ul>
					<li className="socialNav-item">	<span className="fa-stack fa-lg">
																						<i className="bk fa fa-circle fa-stack-2x"></i>
																						<i className="bkhover fa fa-circle fa-stack-2x"></i>
																						<i className="fa fa-facebook fa-stack-1x"></i>
																					</span></li>
					<li className="socialNav-item">	<span className="fa-stack fa-lg">
																						<i className="bk fa fa-circle fa-stack-2x"></i>
																						<i className="bkhover fa fa-circle fa-stack-2x"></i>
																						<i className="fa fa-google-plus fa-stack-1x"></i>
																					</span></li>
					<li className="socialNav-item">	<span className="fa-stack fa-lg">
																						<i className="bk fa fa-circle fa-stack-2x"></i>
																						<i className="bkhover fa fa-circle fa-stack-2x"></i>
																						<i className="fa fa-twitter fa-stack-1x"></i>
																					</span></li>
        </ul>
			</nav>
		)
	}
}