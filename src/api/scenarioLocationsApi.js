import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/scenarioLocations/';

export function getScenarioLocations() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
