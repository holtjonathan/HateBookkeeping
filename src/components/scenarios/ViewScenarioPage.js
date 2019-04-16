import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newScenario } from '../../../tools/mockData';
import SpecialRules from '../scenarios/scenarioSections/SpecialRules'; //eslint-disable-line import/no-named-as-default
import SpecialSetups from '../scenarios/scenarioSections/SpecialSetups'; //eslint-disable-line import/no-named-as-default
import SpecialMovesActions from '../scenarios/scenarioSections/SpecialMovesActions'; //eslint-disable-line import/no-named-as-default
import Missions from '../scenarios/scenarioSections/Missions'; //eslint-disable-line import/no-named-as-default

export function ViewScenarioPage({ ...props }) {
	const [ scenario ] = useState({ ...props.scenario });

	return (
		<div>
			<h1>{scenario.name}</h1>
			<p>{scenario.description}</p>

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<SpecialRules scenarioId={scenario.scenarioId} />
					</div>
					<div className="col-sm">
						<SpecialSetups scenarioId={scenario.scenarioId} />
					</div>
				</div>
			</div>

			<SpecialMovesActions scenarioId={scenario.scenarioId} />
			<Missions scenarioId={scenario.scenarioId} />
		</div>
	);
}

ViewScenarioPage.propTypes = {
	scenario: PropTypes.object.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const scenario = slug && state.scenarios.length > 0 ? getScenarioBySlug(state.scenarios, slug) : newScenario;

	return {
		scenario
	};
}

//could be added to reducer for reuseability
export function getScenarioBySlug(scenarios, slug) {
	return scenarios.find((scenario) => scenario.slug === slug) || null;
}

//what actions do we expose to our component?
// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: {
// 		}
// 	};
// }

export default connect(mapStateToProps)(ViewScenarioPage);
