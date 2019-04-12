import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scenarioDetailReducer(state = initialState.scenario, action) {
	switch (action.type) {
		case types.LOAD_SCENARIO_SPECIAL_RULES_SUCCESS:
			return {
				...state,
				specialRules: action.specialRules
			};
		case types.LOAD_SCENARIO_SPECIAL_SETUPS_SUCCESS: {
			return {
				...state,
				specialSetups: action.specialSetups
			};
		}
		default:
			return state;
	}
}
