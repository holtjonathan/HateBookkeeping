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
			// if (scenarios.length === 0) {
			// 	actions.loadScenarios().catch((error) => {
			// 		alert('Loading scenarios failed' + error);
			// 	});
			// } else {
			// 	setScenario({ ...props.scenario });
			// }

			actions.loadSpecialRules(scenario.scenarioId).catch((error) => {
				alert('Loading special rules failed' + error);
			});
			// if (isEmpty(props.specialRules) || props.specialRules.length === 0) {
			// 	actions.loadSpecialRules(scenario.scenarioId).catch((error) => {
			// 		alert('Loading special rules failed' + error);
			// 	});
			// } else {
			// 	//setSpecialRules({ ...props.specialRules });
			// }
		},
		[ props.scenario ]
	);

	// // Speed up calls to hasOwnProperty
	// var hasOwnProperty = Object.prototype.hasOwnProperty;

	// function isEmpty(obj) {
	// 	// null and undefined are "empty"
	// 	if (obj == null) return true;

	// 	// Assume if it has a length property with a non-zero value
	// 	// that that property is correct.
	// 	if (obj.length > 0) return false;
	// 	if (obj.length === 0) return true;

	// 	// If it isn't an object at this point
	// 	// it is empty, but it can't be anything *but* empty
	// 	// Is it empty?  Depends on your application.
	// 	if (typeof obj !== 'object') return true;

	// 	// Otherwise, does it have any properties of its own?
	// 	// Note that this doesn't handle
	// 	// toString and valueOf enumeration bugs in IE < 9
	// 	for (var key in obj) {
	// 		if (hasOwnProperty.call(obj, key)) return false;
	// 	}

	// 	return true;
	// }

	//this array will list out the objects that useEffect will watch...when this array updates then this component will re-render
	//if this array is blank then this array will only render once when the component mounts (just like componentDidMount())

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
			{/* <ul>
            {scenario.specialrules.map((chronicle) => {
				return (
					<tr key={chronicle.id}>
						<td>
							<Link to={'/chronicle/' + chronicle.slug}>{chronicle.name}</Link>
						</td>
						<td>{chronicle.currentRound}</td>
						<td>{chronicle.currentLeader}</td>
						<td>{chronicle.startDate}</td>
						<td>
							<button className="btn btn-outline-danger" onClick={() => onDeleteClick(chronicle)}>
								Delete
							</button>
						</td>
					</tr>
				);
			})}
            </ul> */}
		</div>
	);
}

ViewScenarioPage.propTypes = {
	scenarios: PropTypes.array,
	loadScenarios: PropTypes.func,
	scenario: PropTypes.object,
	specialRulesCollection: PropTypes.array,
	specialRules: PropTypes.array,
	loadSpecialRules: PropTypes.func,
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
			loadSpecialRules: bindActionCreators(scenarioDetailActions.loadSpecialRules, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScenarioPage);
