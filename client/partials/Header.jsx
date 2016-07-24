import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Social from './Social.jsx';
import Contact from './Contact.jsx';
import MainNav from './MainNav.jsx';
import Logo from './Logo.jsx';
import User from './User.jsx';

export default class Header extends TrackerReact (Component) {
	constructor() {
		super();

		this.state = {
			subscription: {
				academies: Meteor.subscribe("academies")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.academies.stop();  
	}

	academy() {
		return Academies.findOne({name: this.props.academy});
	}

/*<Logo logo={oneAcademy.logo}/>
							<h1 className="tempH1">{oneAcademy.name}</h1>
							<MainNav />*/


	render() {
		let oneAcademy = this.academy();
		if (!oneAcademy){
			return (<h1>My Resolutions </h1>);
		} else {
			return (
					<header className="header-body">
						<div className="header-info">
							<Contact />
							<Social socialLinks={oneAcademy.socialLinks}/>
						</div>
						<div className="nav-area" >
							<Logo logo={oneAcademy.logo}/>
							<h1>{oneAcademy.name}</h1>
							<div className="mainNav-section">
								<User />
								<MainNav />
							</div>
						</div>
					</header>
			);
		}
	}
};
