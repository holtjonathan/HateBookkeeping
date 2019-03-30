//integration test of our action creators, store, and reducer
import { createStore } from 'redux';
import rootReducer from './reducors';
import initialState from './reducors/initialState';
import * as chronicleActions from './actions/chronicleActions';

it('Should handle creating chronicles', function() {
	//arrange
	const store = createStore(rootReducer, initialState);
	const chronicle = {
		name: 'some Chronicle'
	};

	//act
	const action = chronicleActions.createChronicleSuccess(chronicle);
	store.dispatch(action);

	//assert
	const createdChronicle = store.getState().chronicles[0];
	expect(createdChronicle).toEqual(chronicle);
});
