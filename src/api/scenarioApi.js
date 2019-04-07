import { handleResponse, handleError } from './apiUtils';
//const baseUrl = process.env.API_URL + '/scenarios/';
const baseUrl = 'https://localhost:44310/api/scenario';

export function getScenarios() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
