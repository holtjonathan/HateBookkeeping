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

	// const popover = (
	//     <Popover id="popover-basic" title="Popover right">
	//       And here's some <strong>amazing</strong> content. It's very engaging. right?
	//     </Popover>
	//   );

	//   const Example = () => (
	//     <OverlayTrigger trigger="click" placement="right" overlay={popover}>
	//       <Button variant="success">Click me to see</Button>
	//     </OverlayTrigger>
	//   );

	return (
		<div>
			<h2>Missions:</h2>
			<div className="container">
				<div className="card-deck">
					{props.missions.map((mission) => {
						return (
							<div className="card" key={mission.missionId}>
								<div className="card-body">
									<h5 className="card-title">{mission.missionTypeName}</h5>
									<p className="card-text">{mission.missionDescription}</p>
									<p className="card-text">{mission.rewardDescription}</p>
									<p
										className="card-text"
										data-toggle="popover"
										title={mission.upgradeName}
										data-content="And here's some amazing content. It's very engaging. Right?"
									>
										{mission.upgradeName} <br />
										<small className="text-muted">{mission.upgradeDescription}</small>
									</p>

									{/* <p className="card-text">
									</p> */}
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
