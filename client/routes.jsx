import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import {AdminLayout} from './layouts/AdminLayout.jsx';
import AdminPage from './pages/admin/AdminPage.jsx'
import MyHome from './pages/MyHome.jsx'

FlowRouter.route('/admin', {
	action() {
		mount(AdminLayout, {
			content: (<AdminPage />)
		})
	}
});


FlowRouter.route('/admin/:pageId', {
	action(params, queryParams) {
		mount(AdminLayout, {
			content: (<AdminPage page={params.pageId} />)
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