import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scenarioDetailReducer(state = initialState.scenario, action) {
	switch (action.type) {
		case types.LOAD_SCENARIO_SPECIAL_RULES_SUCCESS:
			return {
				...state,
				specialRules: action.specialRules
			};
		case types.LOAD_SCENARIO_SPECIAL_SETUPS_SUCCESS:
			return {
				...state,
				specialSetups: action.specialSetups
			};
		case types.LOAD_SCENARIO_SPECIAL_MOVE_ACTIONS_SUCCESS:
			return {
				...state,
				specialMoveActions: action.specialMoveActions
			};
		case types.LOAD_SCENARIO_MISSIONS_SUCCESS:
			return {
				...state,
				missions: action.missions
			};
		default:
			return state;
	}
}
