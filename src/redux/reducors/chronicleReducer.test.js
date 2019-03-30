import chronicleReducer from './chronicleReducor';
import * as actions from '../actions/chronicleActions';

it('should add chronicle when passed CREATE_CHRONICLE_SUCCESS', () => {
	//arrange
	const initialState = [
		{
			name: 'A'
		},
		{
			name: 'B'
		}
	];

	const newChronicle = {
		name: 'C'
	};

	const action = actions.createChronicleSuccess(newChronicle);

	//act
	const newState = chronicleReducer(initialState, action);

	//assert
	expect(newState.length).toEqual(3);
	expect(newState[0].name).toEqual('A');
	expect(newState[1].name).toEqual('B');
	expect(newState[2].name).toEqual('C');
});

it('should update chronicle when passed UPDATE_CHRONICLE_SUCCESS', () => {
	//arrange
	const initialState = [
		{
			id: 1,
			name: 'A'
		},
		{
			id: 2,
			name: 'B'
		},
		{
			id: 3,
			name: 'C'
		}
	];

	const chronicle = {
		id: 2,
		name: 'New Name'
	};

	const action = actions.updateChronicleSuccess(chronicle);

	//act
	const newState = chronicleReducer(initialState, action);
	const updatedChronicle = newState.find((a) => a.id == chronicle.id);
	const untouchedChronicle = newState.find((a) => a.id == 1);

	//assert
	expect(updatedChronicle.name).toEqual('New Name');
	expect(untouchedChronicle.name).toEqual('A');
	expect(newState.length).toEqual(3);
});
