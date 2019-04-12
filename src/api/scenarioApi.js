import { handleResponse, handleError } from './apiUtils';
//const baseUrl = process.env.API_URL + '/scenarios/';
const baseUrl = 'https://localhost:44310/api';

export function getScenarios() {
	return fetch(baseUrl + '/scenario').then(handleResponse).catch(handleError);
}

export function getScenarioSpecialRules(scenarioId) {
	return fetch(baseUrl + '/specialRule/' + scenarioId).then(handleResponse).catch(handleError);
}

export function getScenarioSpecialSetups(scenarioId) {
	return fetch(baseUrl + '/specialSetup/' + scenarioId).then(handleResponse).catch(handleError);
}
