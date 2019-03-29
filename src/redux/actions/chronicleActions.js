import * as types from './actionTypes';
import * as chronicleApi from '../../api/chronicleApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadChroniclesSuccess(chronicles) {
	return { type: types.LOAD_CHRONICLES_SUCCESS, chronicles };
}

export function updateChronicleSuccess(chronicle) {
	return { type: types.UPDATE_CHRONICLE_SUCCESS, chronicle };
}

export function createChronicleSuccess(chronicle) {
	return { type: types.CREATE_CHRONICLE_SUCCESS, chronicle };
}

export function deleteChronicleOptimistic(chronicle) {
	return { type: types.DELETE_CHRONICLE_OPTIMISTIC, chronicle };
}

export function loadChronicles() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return chronicleApi
			.getChronicles()
			.then((chronicles) => {
				dispatch(loadChroniclesSuccess(chronicles));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function saveChronicle(chronicle) {
	//eslint-disable-next-line no-unused-vars
	return function(dispatch, getState) {
		dispatch(beginApiCall());
		return chronicleApi
			.saveChronicle(chronicle)
			.then((savedChronicle) => {
				chronicle.id
					? dispatch(updateChronicleSuccess(savedChronicle))
					: dispatch(createChronicleSuccess(savedChronicle));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function deleteChronicle(chronicle) {
	return function(dispatch) {
		//doing optimistic delete, so not dispatching begin/end api call
		//actions, or apiCallError action since we're not shwoing the loading status for this.
		dispatch(deleteChronicleOptimistic(chronicle));
		return chronicleApi.deleteChronicle(chronicle.id);
	};
}
