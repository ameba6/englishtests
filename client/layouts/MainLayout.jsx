import React from 'react';

import Header from '../partials/Header.jsx';

export const MainLayout = ({academy, content}) => (
	<div className="main-layout">
	<header className="main-header">
		<Header academy={academy} />
	</header>
	<main>
		{content}
	</main>
	</div>
)