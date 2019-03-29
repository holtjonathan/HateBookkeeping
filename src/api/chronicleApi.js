import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/chronicles/';

export function getChronicles() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveChronicle(chronicle) {
	return fetch(baseUrl + (chronicle.id || ''), {
		method: chronicle.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(chronicle)
	})
		.then(handleResponse)
		.catch(handleError);
}

export function deleteChronicle(chronicleId) {
	return fetch(baseUrl + chronicleId, { method: 'DELETE' }).then(handleResponse).catch(handleError);
}
