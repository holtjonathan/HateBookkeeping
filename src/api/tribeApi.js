import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/tribes/';

export function getTribes() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
