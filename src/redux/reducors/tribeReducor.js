import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tribeReducer(state = initialState.tribes, action) {
	switch (action.type) {
		case types.CREATE_TRIBE:
			return [ ...state, { ...action.tribe } ];
		case types.LOAD_TRIBES_SUCCESS:
			return action.tribes;
		default:
			return state;
	}
}
