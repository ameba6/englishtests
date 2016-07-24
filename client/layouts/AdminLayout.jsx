import React from 'react';

import AdminHeader from '../partials/admin/AdminHeader.jsx';

export const AdminLayout = ({content}) => (
	<div className="admin-layout">
		<header className="admin-header">
			<a className="toMySite" href="/">
				<i className="fa fa-chevron-left fa-fw" aria-hidden="true"></i>
				 Mi sitio
			</a>
			<AdminHeader />
			<a href=""> </a>
		</header>
		{content}
		<footer className="admin-footer"><a>footer</a></footer>
	</div>
)