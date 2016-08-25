import React, {Component} from 'react';

import Social from './Social.jsx';
import Contact from './Contact.jsx';
import MainNav from './MainNav.jsx';
import Logo from './Logo.jsx';

export default class Header extends Component {
	render() {
		let sl = [{name:"facebook",faIcon: "fa-facebook", url: "https://www.facebook.com/CambridgeEnglish"},
						{name:"googlePlus",faIcon: "fa-google-plus", url: "https://www.youtube.com/user/cambridgeenglishtv"},
						{name:"twitter",faIcon: "fa-twitter", url: "https://twitter.com/CambridgeEng"}
					];
					
		return (
				<header className="header-area">
					<div className="h_info-area">
						<Contact />
						<Social socialLinks={sl} />
					</div>
					<div className="h_nav-area" >
						<Logo logo="Cambridge.png"/>
        		<MainNav />
        	</div>
				</header>
		)
	}
}