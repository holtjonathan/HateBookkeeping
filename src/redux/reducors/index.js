import { combineReducers } from 'redux';
import chronicles from './chronicleReducor';
import tribes from './tribeReducor';
import scenarios from './scenarioReducor';
import players from './playerReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
	chronicles,
	tribes,
	scenarios,
	players,
	apiCallsInProgress
});

export default rootReducer;
