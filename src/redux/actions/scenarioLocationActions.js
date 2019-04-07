import * as types from './actionTypes';
import * as scenarioLocationsApi from '../../api/scenarioLocationsApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadScenarioLocationsSuccess(scenarioLocations) {
	return { type: types.LOAD_SCENARIO_LOCATIONS_SUCCESS, scenarioLocations };
}

export function loadScenarioLocations() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioLocationsApi
			.getScenarioLocations()
			.then((scenarioLocations) => {
				dispatch(loadScenarioLocationsSuccess(scenarioLocations));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
