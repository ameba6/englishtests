import React, {Component} from 'react';

export default class Social extends Component {
	
	clickSocial(url) {
		console.log(url);
		window.open(url, '_blank');
	}

	render() {
		console.log(this.props.socialLinks);
		let socialLinks = this.props.socialLinks;
		let sl = [{name:"facebook",faIcon: "fa-facebook", url: "https://www.facebook.com/CambridgeEnglish"},
							{name:"googlePlus",faIcon: "fa-google-plus", url: "https://www.youtube.com/user/cambridgeenglishtv"},
							{name:"twitter",faIcon: "fa-twitter", url: "https://twitter.com/CambridgeEng"}
						];	
		return (
			<div className="social-menu">
				<ul className="social-ul">
				{socialLinks.map( (sl)=>{
					return(
						<li className="social-item" key={sl.name} onClick={this.clickSocial.bind(this, sl.url)}>
							<span className="fa-stack fa-lg">
								<i className="bk fa fa-circle fa-stack-2x"></i>
								<i className="bkhover fa fa-circle fa-stack-2x"></i>
								<i className={"fa " + sl.faIcon + " fa-stack-1x"}></i>
							</span>
						</li>
						)})}
        </ul>
			</div>
		)
	}
}