import * as types from './actionTypes';
import * as scenarioApi from '../../api/scenarioApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadScenarioLocationsSuccess(scenarios) {
	return { type: types.LOAD_SCENARIO_LOCATIONS_SUCCESS, scenarios };
}

export function loadSpecialRulesSuccess(specialRules) {
	return { type: types.LOAD_SCENARIO_SPECIAL_RULES_SUCCESS, specialRules };
}

export function loadSpecialSetupsSuccess(specialSetups) {
	return { type: types.LOAD_SCENARIO_SPECIAL_SETUPS_SUCCESS, specialSetups };
}

export function loadSpecialMoveActionsSuccess(specialMoveActions) {
	return { type: types.LOAD_SCENARIO_SPECIAL_MOVE_ACTIONS_SUCCESS, specialMoveActions };
}

export function loadMissionsSuccess(missions) {
	return { type: types.LOAD_SCENARIO_MISSIONS_SUCCESS, missions };
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

export function loadSpecialSetups(scenarioId) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioApi
			.getScenarioSpecialSetups(scenarioId)
			.then((specialSetups) => {
				dispatch(loadSpecialSetupsSuccess(specialSetups));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function loadSpecialMoveActions(scenarioId) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioApi
			.getScenarioSpecialMoveActions(scenarioId)
			.then((specialMovesActions) => {
				dispatch(loadSpecialMoveActionsSuccess(specialMovesActions));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function loadMissions(scenarioId) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return scenarioApi
			.getScenarioMissions(scenarioId)
			.then((missions) => {
				dispatch(loadMissionsSuccess(missions));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
