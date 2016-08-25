import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class MainNav extends Component {
	//console.log(this.props);
    //console.log("from container: " + user);
    //console.log("from container: " + isAdmin);
    //<li className=""><AccountsLogin /></li>
	render() {
		return (
			<div className="mainNav-menu">
				<ul className="mainNav-ul">
					<li className="mainNav-Item "><a href="admin" > Dashboard</a></li>
					<li className="mainNav-Item "><a href="admin"> Backoffice</a></li>
					<li className="mainNav-Item "><a href="admin"> <i className="fa fa-cog fa-lg" aria-hidden="true"></i></a></li>
				</ul>
			</div>
		)
	}
}