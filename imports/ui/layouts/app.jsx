import React from 'react';

import AccountsUIWrapper from '../components/accountsUIWrapper.jsx';
import Navigation from '../components/navigation.jsx';
import { Breadcrumb } from '../components/breadcrumb.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const App = ( { children } ) => (
	<div className="o-wrapper">
				<Breadcrumb />
				<Navigation />
		<div id="content">	
			{ children }
		</div>
	</div>
)