import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Social from './Social.jsx';
import Contact from './Contact.jsx';
import MainNav from './MainNav.jsx';
import Logo from './Logo.jsx';

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

	render() {
		let oneAcademy = this.academy();
		if (!oneAcademy){
			return (<h1>My Resolutions </h1>);
		} else {
			return (
					<header className="header-area">
						<div className="Info-area">
							<Contact />
							<Social socialLinks={oneAcademy.socialLinks}/>
						</div>
						<div className="Nav-area" >
							<Logo logo={oneAcademy.logo}/>
							<h1>{oneAcademy.name}</h1>
							<MainNav />
						</div>
					</header>
			);
		}
	}
};
