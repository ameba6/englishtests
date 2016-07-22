import React from 'react';

import AdminHeader from '../partials/AdminHeader.jsx';
import AdminNav from '../partials/AdminNav.jsx';

export const AdminLayout = ({content}) => (
	<div className="admin-layout">
		<header className="admin-header"><AdminHeader /></header>
		<div className="admin-body">
			<nav className="admin-nav"><AdminNav /></nav>
			<main className="admin-content">{content}</main>
			<aside className="admin-ads"><a>aside</a></aside>
		</div>
		<footer className="admin-footer"><a>footer</a></footer>
	</div>
)