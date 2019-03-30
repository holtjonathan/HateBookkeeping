import React from 'react';
import { mount } from 'enzyme';
import { players, newChronicle, chronicles } from '../../../tools/mockData';
import { ManageChroniclePage } from './ManageChroniclePage';

function render(args) {
	const defaultProps = {
		players,
		chronicles,
		//Passed from React Router in real app, so just stubvbing in for test.
		//Could also choose to use MemoryRouter as shown in Header.test.js,
		//or even wrap with React Router, depending on whether I
		//need to test React Router related behavior
		history: {},
		saveChronicle: jest.fn(),
		loadPlayers: jest.fn(),
		loadChronicles: jest.fn(),
		chronicle: newChronicle,
		match: {}
	};

	const props = { ...defaultProps, ...args };
	return mount(<ManageChroniclePage {...props} />);

	//would need to import Provider and Store
	//return mount(<Provider store={store}><ManageChroniclePage /></Provider>);
}

it('sets error when attempting to save an empty name field', () => {
	const wrapper = render();
	wrapper.find('form').simulate('submit');
	const error = wrapper.find('.alert').first();
	expect(error.text()).toBe('Name is required');
});
