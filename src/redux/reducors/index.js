import { combineReducers } from 'redux';
import chronicles from './chronicleReducor';
import tribes from './tribeReducor';
import scenarios from './scenarioReducor';
import players from './playerReducer';
import apiCallsInProgress from './apiStatusReducer';
import scenarioLocationReducer from './scenarioLocationReducer';
import scenarioDetails from './scenarioDetailReducer';

const rootReducer = combineReducers({
	chronicles,
	tribes,
	scenarios,
	players,
	apiCallsInProgress,
	scenarioLocationReducer,
	scenarioDetails,
	scenario: {
		scenarioDetails: 'detao'
	}
});

export default rootReducer;
