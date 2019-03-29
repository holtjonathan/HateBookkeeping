import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scenarioReducer(state = initialState.scenarios, action) {
	switch (action.type) {
		case types.CREATE_SCENARIO:
			return [ ...state, { ...action.scenario } ];
		case types.LOAD_SCENARIOS_SUCCESS:
			return action.scenarios;
		default:
			return state;
	}
}
