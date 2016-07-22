import React, {Component} from 'react';

import AdminMenu from '../../partials/admin/AdminMenu.jsx';

export default class AdminPage extends Component {
	constructor(){
		super();
		this.state = {
			selectedTab: 0
		}
	}

	contentSelect(tabIndex){
		return(this.setState({selectedTab: tabIndex}))
	}

	render() {
		console.log(this.props.page);
		let Tindex = this.state.selectedTab;
		return(
			<main  className="admin-body">
				<nav className="admin-nav"><AdminMenu selected={this.state.selectedTab} clickOn={this.contentSelect.bind(this)} /></nav>
				<div className="admin-content">
					<h1>{Tindex} AdminHello.... :)    AdminHello.... :)    AdminHello.... :)</h1>
					<h1>AdminHello.... :)    AdminHello.... :)   AdminHello.... :)</h1>
				</div>
				<aside className="admin-ads"><a>aside</a></aside>
			</main>

		)
	}
}