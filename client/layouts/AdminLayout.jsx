import React from 'react';

import AdminHeader from '../partials/admin/AdminHeader.jsx';

export const AdminLayout = ({content}) => (
	<div className="admin-layout">
		<header className="admin-header"><AdminHeader /></header>
		{content}
		<footer className="admin-footer"><a>footer</a></footer>
	</div>
)