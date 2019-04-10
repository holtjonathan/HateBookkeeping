import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scenarioReducer(state = initialState.scenario, action) {
	switch (action.type) {
		case types.LOAD_SCENARIO_SPECIAL_RULES_SUCCESS:
			return { specialRules: action.specialRules }; //action.specialRules;
		default:
			return state;
	}
}
