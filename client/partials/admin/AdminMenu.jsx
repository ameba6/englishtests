import React, {Component} from 'react';

export default class AdminNav extends Component {
	constructor() {
		super()
		this.state = {
			selected: 0
		}
	}

	handleClick(index, event) {
		event.preventDefault();
		this.setState({selected: index});
	}

	render() {
		let adminItems = [{name: "Item-1", index: 0, faIcon: "fa-leaf"		, caption: "Academies",
											 url: "/admin/academies"},
											{name: "Item-2", index: 1, faIcon: "fa-cube"		, caption: "Tests",
											 url: "/admin/test"},
											{name: "Item-3", index: 2, faIcon: "fa-filter"	, caption: "Users",
											 url: "/admin/users"}
											];

		return(
			<div className="admin-menu">
				<ul className="my-ul">
				{adminItems.map( (item)=>{
					let activeClass = (this.state.selected === item.index ? 'active' : '');
					return(
						<li key={item.index} className={activeClass} onClick={this.handleClick.bind(this, item.index)}>
							<a className="" href={item.url}>
								<i className={"fa " + item.faIcon + " fa-lg"}></i>
								<span className="AdNav-text">{item.caption}</span>
							</a>
						</li>
					)
				})}
				</ul>
			</div>
		)
	}
}