import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

//Shallow render lets you search for React component tags
it('contains 5 NavLinks via shallow', () => {
	const numLinks = shallow(<Header />).find('NavLink').length;
	expect(numLinks).toEqual(5);
});

//Note how with mount you search for the final rendered HTML since it generates the final DOM.
//We also need to pull in React Router's memoryRouter for testing since the Header expects to haverd React Router's props passed in
it('contains 5 anchors via mount', () => {
	const numAnchors = mount(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	).find('a').length;

	expect(numAnchors).toEqual(5);
});
