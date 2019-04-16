import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../../redux/actions/scenarioDetailActions';
import { bindActionCreators } from 'redux';

export function SpecialSetups({ actions, ...props }) {
	useEffect(() => {
		actions.loadSpecialMoveActions(props.scenarioId).catch((error) => {
			alert('Loading special setups failed' + error);
		});
	}, []);

	return (
		<div>
			<h2>Special Moves and Actions:</h2>
			{props.specialMoveActions.map((specialMoveAction) => {
				return (
					<ul className="list-group" key={specialMoveAction.specialMoveActionId}>
						<li className="list-group-item">{specialMoveAction.moveText}</li>
					</ul>
				);
			})}
		</div>
	);
}

SpecialSetups.propTypes = {
	specialMoveActions: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	scenarioId: PropTypes.number.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	return {
		scenarioId: ownProps.scenarioId,
		specialMoveActions: state.scenarioDetails.specialMoveActions
			? state.scenarioDetails.specialMoveActions.map((specialMoveAction) => {
					return {
						...specialMoveAction
					};
				})
			: []
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadSpecialMoveActions: bindActionCreators(scenarioDetailActions.loadSpecialMoveActions, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialSetups);
