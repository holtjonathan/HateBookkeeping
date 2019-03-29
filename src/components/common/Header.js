import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { color: '#F15B2A' };

	return (
		<nav>
			<NavLink to="/" activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{' | '}
			<NavLink to="/about" activeStyle={activeStyle}>
				About
			</NavLink>
			{' | '}
			<NavLink to="/chronicles" activeStyle={activeStyle}>
				Chronicles
			</NavLink>
			{' | '}
			<NavLink to="/tribes" activeStyle={activeStyle}>
				Tribes
			</NavLink>
			{' | '}
			<NavLink to="/scenarios" activeStyle={activeStyle}>
				Scenarios
			</NavLink>
		</nav>
	);
};

export default Header;
