import * as types from './actionTypes';
import * as playerApi from '../../api/playerApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createPlayer(player) {
	return { type: types.CREATE_PLAYERS_SUCCESS, player };
}

export function loadPlayersSuccess(players) {
	return { type: types.LOAD_PLAYERS_SUCCESS, players };
}

export function loadPlayers() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return playerApi
			.getPlayers()
			.then((players) => {
				dispatch(loadPlayersSuccess(players));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
