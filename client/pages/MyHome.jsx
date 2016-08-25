import React, {Component} from 'react';
import SimpleSlider from '../partials/SimpleSlider.jsx';

export default class MyHome extends Component {

	render() {
		return(
			<div>
				<SimpleSlider />
				<br/>
				<h1>Welcome to my page</h1>
				<h2>it looks better under Chrome</h2>
				<p>Hello, this is my landing page</p>
			</div>
		)
	}
};