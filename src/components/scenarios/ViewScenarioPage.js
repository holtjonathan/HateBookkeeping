import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../redux/actions/scenarioDetailActions';
import { newScenario } from '../../../tools/mockData';
import { bindActionCreators } from 'redux';

//...props is assigning any props that haven't been manually destructured to 'props'
export function ViewScenarioPage({ actions, ...props }) {
	const [ scenario ] = useState({ ...props.scenario });
	//const [ specialRules, setSpecialRules ] = useState({ ...props.specialRules });

	useEffect(
		() => {
			actions.loadSpecialRules(scenario.scenarioId).catch((error) => {
				alert('Loading special rules failed' + error);
			});
			actions.loadSpecialSetups(scenario.scenarioId).catch((error) => {
				alert('Loading special setups failed' + error);
			});
		},
		[ props.scenario ]
	);

	return (
		<div>
			<h1>{scenario.name}</h1>
			<p>{scenario.description}</p>
			{/* <div>{specialRules}</div> */}
			{/* {JSON.stringify(props.specialRules)} */}

			<h2>Special Rules:</h2>
			{props.specialRules.map((specialRule) => {
				// return <div key={specialRule.specialRuleId}> {specialRule.ruleText} </div>;
				return (
					<ul key={specialRule.specialRuleId}>
						<li>{specialRule.ruleText}</li>
					</ul>
				);
			})}

			<h2>Special Setups:</h2>
			{props.specialSetups.map((specialSetup) => {
				// return <div key={specialRule.specialRuleId}> {specialRule.ruleText} </div>;
				return (
					<ul key={specialSetup.specialSetupId}>
						<li>{specialSetup.setupText}</li>
					</ul>
				);
			})}
		</div>
	);
}

ViewScenarioPage.propTypes = {
	scenario: PropTypes.object.isRequired,
	specialRulesCollection: PropTypes.array,
	specialRules: PropTypes.array.isRequired,
	specialSetups: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const scenario = slug && state.scenarios.length > 0 ? getScenarioBySlug(state.scenarios, slug) : newScenario;

	return {
		//chronicle: newChronicle, //this ALWAYS passes in an empty chronicle
		scenario,
		//scenarios: state.scenarios,
		specialRules: state.scenarioDetails.specialRules.map((specialRule) => {
			return {
				...specialRule
			};
		}),
		specialSetups: state.scenarioDetails.specialSetups.map((specialSetup) => {
			return {
				...specialSetup
			};
		})

		//state.scenarioDetails ? state.scenarioDetails.specialRules : {}
	};
}

//could be added to reducer for reuseability
export function getScenarioBySlug(scenarios, slug) {
	return scenarios.find((scenario) => scenario.slug === slug) || null;
}

//what actions do we expose to our component?
//objectVersion (connect wraps DISPATCH around properties within an object if it is provided like this):
// const mapDispatchToProps = {
// 	loadScenarios: scenarioActions.loadScenarios(),
// 	loadSpecialRules: scenarioActions.loadSpecialRules()
// };

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadSpecialRules: bindActionCreators(scenarioDetailActions.loadSpecialRules, dispatch),
			loadSpecialSetups: bindActionCreators(scenarioDetailActions.loadSpecialSetups, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScenarioPage);
