import React from 'react';
import { connect } from 'react-redux';
import * as scenarioActions from '../../redux/actions/scenarioActions';
import * as playerActions from '../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ScenarioList from './ScenarioList';

class ScenariosPage extends React.Component {
	componentDidMount() {
		const { scenarios, players, actions } = this.props;

		if (scenarios.length === 0) {
			actions.loadScenarios().catch((error) => {
				alert('Loading scenarios failed' + error);
			});
		}

		if (players.length === 0) {
			actions.loadPlayers().catch((error) => {
				alert('Loading players failed' + error);
			});
		}
	}

	render() {
		return (
			<div>
				<h2>Scenarios</h2>
				<ScenarioList scenarios={this.props.scenarios} />
			</div>
		);
	}
}

ScenariosPage.propTypes = {
	actions: PropTypes.object.isRequired,
	scenarios: PropTypes.array.isRequired,
	players: PropTypes.array.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state) {
	return {
		scenarios:
			state.players.length === 0
				? []
				: state.scenarios.map((scenario) => {
						return {
							...scenario,
							chosenMostOftenBy: state.players.find((a) => a.id === scenario.chosenMostOftenBy).nickName
						};
					}),
		players: state.players
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadScenarios: bindActionCreators(scenarioActions.loadScenarios, dispatch),
			loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenariosPage);
