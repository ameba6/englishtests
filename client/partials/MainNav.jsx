import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class MainNav extends Component {
	//console.log(this.props);
    //console.log("from container: " + user);
    //console.log("from container: " + isAdmin);
    //<li className=""><AccountsLogin /></li>
	render() {
		return (
		  <nav className="main-nav" ref="container">
            <ul>
            	<li className="mainNav-Item"><a href="#">BV</a></li>
                <li className="mainNav-Item"><a href="/">Home</a></li>
                <li className="mainNav-Item"><a href="#">Admin</a></li>
            </ul>
  		</nav>
		)
	}
}