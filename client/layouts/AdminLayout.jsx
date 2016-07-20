import React from 'react';

import AdminHeader from '../partials/AdminHeader.jsx';
import AdminNav from '../partials/AdminNav.jsx';

export const AdminLayout = ({content}) => (
	<div className="admin-layout">
		<AdminHeader />
		<AdminNav />
	<main>
		{content}
	</main>
	</div>
)