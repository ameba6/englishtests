import React, {Component} from 'react';

export default class AdminNav extends Component {
	render() {
		let adminItems = [{name: "Item-1",faIcon: "fa-leaf"		, txt: "Item-1"},
											{name: "Item-2",faIcon: "fa-cube"		, txt: "Item-2"},
											{name: "Item-3",faIcon: "fa-filter"	, txt: "Item-3"}
											];
		return(
			<div className="admin-menu">
				<span>Span Text</span>
				<ul className="my-ul">
					<li>hey Item</li>
				</ul>
			</div>
		)
	}
}