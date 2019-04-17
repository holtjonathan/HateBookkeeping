import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../../redux/actions/scenarioDetailActions';
import { bindActionCreators } from 'redux';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

export function SpecialSetups({ actions, ...props }) {
	useEffect(() => {
		actions.loadMissions(props.scenarioId).catch((error) => {
			alert('Loading special setups failed' + error);
		});
	}, []);

	function popover(mission) {
		return (
			<Popover id="popover-basic" title={mission.upgradeName}>
				{mission.upgradeDescription}
			</Popover>
		);
	}

	function Define(mission) {
		return (
			<OverlayTrigger trigger="hover" placement="right" overlay={popover(mission)}>
				<Button variant="success">{mission.upgradeName}</Button>
			</OverlayTrigger>
		);
	}

	return (
		<div>
			<h2>Missions:</h2>
			<div className="container">
				<div className="card-deck">
					{props.missions.map((mission) => {
						return (
							// <div className="card {{mission.missionTypeName}}" key={mission.missionId}>
							<div className={'card ' + mission.missionTypeName} key={mission.missionId}>
								<div className="card-body">
									<h5 className="card-title">{mission.missionTypeName}</h5>
									<p className="card-text">{mission.missionDescription}</p>
									<p className="card-text">{mission.rewardDescription}</p>

									<Define {...mission} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
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
