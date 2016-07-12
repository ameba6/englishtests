import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Hello from '../Hello.jsx'
import MyHome from './pages/MyHome.jsx'

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<MyHome />)
		})
	}
});