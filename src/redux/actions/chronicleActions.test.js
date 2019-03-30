import * as chronicleActions from './chronicleActions';
import * as types from './actionTypes';
import { chronicles } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

//test an async action
const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	describe('Load Chronicle Thunk', () => {
		it('should create BEGIN_API_CALL and LOAD_CHRONICLE_SUCCESS when loading chronicles', () => {
			fetchMock.mock('*', {
				body: chronicles,
				headers: { 'content-type': 'application/json' }
			});

			const expectedActions = [
				{ type: types.BEGIN_API_CALL },
				{ type: types.LOAD_CHRONICLES_SUCCESS, chronicles }
			];

			const store = mockStore({ chronicles: [] });
			return store.dispatch(chronicleActions.loadChronicles()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});

describe('createChronicleSuccess', () => {
	it('should create a CREATE_CHRONICLE_SUCCESS action', () => {
		//arrange
		const chronicle = chronicles[0];
		const expectedAction = {
			type: types.CREATE_CHRONICLE_SUCCESS,
			chronicle
		};

		//act
		const action = chronicleActions.createChronicleSuccess(chronicle);

		//assert
		expect(action).toEqual(expectedAction);
	});
});
