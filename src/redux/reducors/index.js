import { combineReducers } from 'redux';
import chronicles from './chronicleReducor';
import tribes from './tribeReducor';
import scenarios from './scenarioReducor';
import players from './playerReducer';
import apiCallsInProgress from './apiStatusReducer';
import scenarioLocationReducer from './scenarioLocationReducer';

const rootReducer = combineReducers({
	chronicles,
	tribes,
	scenarios,
	players,
	apiCallsInProgress,
	scenarioLocationReducer
});

export default rootReducer;
