import React from 'react';
import { connect } from 'react-redux';
import * as scenarioActions from '../../redux/actions/scenarioActions';
import * as scenarioLocationActions from '../../redux/actions/scenarioLocationActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ScenarioList from './ScenarioList';

class ScenariosPage extends React.Component {
	componentDidMount() {
		//const { scenarios, scenarioLocations, actions } = this.props;
		const { scenarios, actions } = this.props;
		if (scenarios.length === 0) {
			actions.loadScenarios().catch((error) => {
				alert('Loading scenarios failed' + error);
			});
		}

		// if (scenarioLocations.length === 0) {
		// 	actions
		// 		.loadScenarioLocations()
		// 		.then((f) => {
		// 			console.log('terst', f);
		// 		})
		// 		.catch((error) => {
		// 			alert('Loading scenario locations failed' + error);
		// 		});
		// }
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
	scenarioLocations: PropTypes.array.isRequired
	//players: PropTypes.array.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state) {
	return {
		scenarios: state.scenarios.map((scenario) => {
			return {
				...scenario
				//scenarioLocation: state.scenarioLocations.find((a) => a.id === scenario.scenarioLocationId)
				//	.scenarioLocationName
			};
		}),
		scenarioLocations: [],
		players: [] //state.players
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadScenarios: bindActionCreators(scenarioActions.loadScenarios, dispatch),
			loadSpecialRules: bindActionCreators(scenarioActions.loadSpecialRules, dispatch),
			loadScenarioLocations: bindActionCreators(scenarioLocationActions.loadScenarioLocations, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenariosPage);
