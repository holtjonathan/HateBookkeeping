import * as types from './actionTypes';
import * as tribeApi from '../../api/tribeApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createTribe(tribe) {
	return { type: types.CREATE_TRIBE, tribe };
}

export function loadTribesSuccess(tribes) {
	return { type: types.LOAD_TRIBES_SUCCESS, tribes };
}

export function loadTribes() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return tribeApi
			.getTribes()
			.then((tribes) => {
				dispatch(loadTribesSuccess(tribes));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
