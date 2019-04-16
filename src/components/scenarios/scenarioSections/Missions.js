import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../../redux/actions/scenarioDetailActions';
import { bindActionCreators } from 'redux';

export function SpecialSetups({ actions, ...props }) {
	useEffect(() => {
		actions.loadMissions(props.scenarioId).catch((error) => {
			alert('Loading special setups failed' + error);
		});
	}, []);

	return (
		<div>
			<h2>Missions:</h2>
			{props.missions.map((mission) => {
				return (
					<ul className="list-group" key={mission.missionId}>
						<li className="list-group-item">{mission.missionDescription}</li>
						<li className="list-group-item">{mission.missionTypeName}</li>
						<li className="list-group-item">{mission.rewardDescription}</li>
						<li className="list-group-item">{mission.upgradeName}</li>
						<li className="list-group-item">{mission.upgradeDescription}</li>
					</ul>
				);
			})}
		</div>
	);
}

SpecialSetups.propTypes = {
	missions: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	scenarioId: PropTypes.number.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	return {
		scenarioId: ownProps.scenarioId,
		missions: state.scenarioDetails.missions
			? state.scenarioDetails.missions.map((mission) => {
					return {
						...mission
					};
				})
			: []
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadMissions: bindActionCreators(scenarioDetailActions.loadMissions, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialSetups);
