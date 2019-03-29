import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chronicleReducer(state = initialState.chronicles, action) {
	switch (action.type) {
		case types.CREATE_CHRONICLE_SUCCESS:
			return [ ...state, { ...action.chronicle } ];
		case types.UPDATE_CHRONICLE_SUCCESS:
			return state.map((chronicle) => (chronicle.id === action.chronicle.id ? action.chronicle : chronicle));
		case types.LOAD_CHRONICLES_SUCCESS:
			return action.chronicles;
		case types.DELETE_CHRONICLE_OPTIMISTIC:
			return state.filter((chronicle) => chronicle.id !== action.chronicle.id);
		default:
			return state;
	}
}
