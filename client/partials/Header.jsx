import React, {Component} from 'react';

import Social from './Social.jsx';
import Contact from './Contact.jsx';
import MainNav from './MainNav.jsx';
import Logo from './Logo.jsx';

export default class Header extends Component {
	render() {
		return (
				<header>
					<div className="Info-area">
						<Contact />
						<Social />
					</div>
					<div className="Nav-area" >
						<Logo />
        		<MainNav />
        	</div>
				</header>
		)
	}
}
