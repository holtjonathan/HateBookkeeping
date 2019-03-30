import React from 'react';
import ChronicleForm from './ChronicleForm';
import { shallow } from 'enzyme';

function renderChronicleForm(args) {
	const defaultProps = {
		players: [],
		chronicle: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<ChronicleForm {...props} />);
}

it('renders form and header', () => {
	const wrapper = renderChronicleForm();
	//console.log(wrapper.debug());
	expect(wrapper.find('form').length).toBe(1);
	expect(wrapper.find('h2').text()).toEqual('Add Chronicle');

	//can do stuff like: ID: find('#firstname'),   Class: find('.wrapper'),    Tag: find('h1')
});

it('labels save button as "Save" when not saving', () => {
	const wrapper = renderChronicleForm();
	//console.log(wrapper.debug());
	expect(wrapper.find('button').text()).toBe('Save');
});

it('labels save button as "Saving..." when saving', () => {
	const wrapper = renderChronicleForm({ saving: true });
	//console.log(wrapper.debug());
	expect(wrapper.find('button').text()).toBe('Saving...');
});
