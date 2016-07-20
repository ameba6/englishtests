import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import {AdminLayout} from './layouts/AdminLayout.jsx';
import Hello from '../Hello.jsx'
import MyHome from './pages/MyHome.jsx'

FlowRouter.route('/admin', {
	action() {
		mount(AdminLayout, {
			content: (<Hello />)
		})
	}
});

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<MyHome />)
		})
	}
});