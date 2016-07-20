import React, {Component} from 'react';

export default class AdminNav extends Component {
	render() {
		let adminItems = [{name: "Item-1",faIcon: "fa-leaf"		, txt: "Item-1"},
											{name: "Item-2",faIcon: "fa-cube"		, txt: "Item-2"},
											{name: "Item-3",faIcon: "fa-filter"	, txt: "Item-3"}
											];
		return(
			<div className="admin-nav">
				<ul className="">
				{adminItems.map( (item)=>{
					return(
						<li key={item.name} onClick="">
							<a>
								<i className={"fa " + item.faIcon + " fa-lg"}></i>
								<span className="AdNav-text">{item.txt}</span>
							</a>
						</li>
					)
				})}
				</ul>
			</div>
		)
	}
}