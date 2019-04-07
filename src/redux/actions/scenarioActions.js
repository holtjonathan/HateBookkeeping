import * as types from './actionTypes';
import * as scenarioApi from '../../api/scenarioApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createScenario(scenario) {
	return { type: types.CREATE_SCENARIO, scenario };
}

export function loadScenariosSuccess(scenarios) {
	return { type: types.LOAD_SCENARIOS_SUCCESS, scenarios };
}

export function loadScenarioLocationsSuccess(scenarios) {
	return { type: types.LOAD_SCENARIO_LOCATIONS_SUCCESS, scenarios };
}

export function loadScenarios() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioApi
			.getScenarios()
			.then((scenarios) => {
				console.log('scenarioActionsSuccess', scenarios);
				dispatch(loadScenariosSuccess(scenarios));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
