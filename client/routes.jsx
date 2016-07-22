import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import {AdminLayout} from './layouts/AdminLayout.jsx';
import AdminHello from './pages/admin/AdminHello.jsx'
import MyHome from './pages/MyHome.jsx'

FlowRouter.route('/admin', {
	action() {
		mount(AdminLayout, {
			content: (<AdminHello />)
		})
	}
});

FlowRouter.route('/', {
	action(params, queryParams) {
		mount(MainLayout, {
			academy: "Cambridge",
			content: (<MyHome />)
		})
	}
});

FlowRouter.route('/:academy', {
	action(params, queryParams) {
		mount(MainLayout, {
			academy: params.academy,
			content: (<MyHome />)
		})
	}
});