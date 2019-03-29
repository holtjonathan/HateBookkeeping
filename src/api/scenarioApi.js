import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/scenarios/';

export function getScenarios() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
