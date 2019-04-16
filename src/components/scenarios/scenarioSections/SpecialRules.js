import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../../redux/actions/scenarioDetailActions';
import { bindActionCreators } from 'redux';

export function SpecialRules({ actions, ...props }) {
	useEffect(() => {
		actions.loadSpecialRules(props.scenarioId).catch((error) => {
			alert('Loading special rules failed' + error);
		});
	}, []);

	return (
		<div>
			<h2>Special Rules:</h2>

			{props.specialRules.map((specialRule) => {
				return (
					<ul className="list-group" key={specialRule.specialRuleId}>
						<li className="list-group-item">{specialRule.ruleText}</li>
					</ul>
				);
			})}
		</div>
	);
}

SpecialRules.propTypes = {
	specialRules: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	scenarioId: PropTypes.number.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	return {
		scenarioId: ownProps.scenarioId,
		specialRules: state.scenarioDetails.specialRules.map((specialRule) => {
			return {
				...specialRule
			};
		})
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadSpecialRules: bindActionCreators(scenarioDetailActions.loadSpecialRules, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialRules);
