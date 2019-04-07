import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scenarioLocationsReducer(state = initialState.scenarioLocations, action) {
	switch (action.type) {
		case types.LOAD_SCENARIO_LOCATIONS_SUCCESS:
			return action.scenarioLocations;
		default:
			return state;
	}
}
