import * as types from './actionTypes';
import * as scenarioApi from '../../api/scenarioApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadScenarioLocationsSuccess(scenarios) {
	return { type: types.LOAD_SCENARIO_LOCATIONS_SUCCESS, scenarios };
}

export function loadSpecialRulesSuccess(specialRules) {
	return { type: types.LOAD_SCENARIO_SPECIAL_RULES_SUCCESS, specialRules };
}

export function loadSpecialRules(scenarioId) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioApi
			.getScenarioSpecialRules(scenarioId)
			.then((specialRules) => {
				dispatch(loadSpecialRulesSuccess(specialRules));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
