import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as scenarioDetailActions from '../../../redux/actions/scenarioDetailActions';
import { bindActionCreators } from 'redux';

export function SpecialSetups({ actions, ...props }) {
	useEffect(() => {
		actions.loadSpecialSetups(props.scenarioId).catch((error) => {
			alert('Loading special rules failed' + error);
		});
	}, []);

	return (
		<div>
			<h2>Special Setups:</h2>
			{props.specialSetups.map((specialSetup) => {
				return (
					<ul className="list-group" key={specialSetup.specialSetupId}>
						<li className="list-group-item">{specialSetup.setupText}</li>
					</ul>
				);
			})}
		</div>
	);
}

SpecialSetups.propTypes = {
	specialSetups: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	scenarioId: PropTypes.number.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	return {
		scenarioId: ownProps.scenarioId,
		specialSetups: state.scenarioDetails.specialSetups.map((specialSetup) => {
			return {
				...specialSetup
			};
		})
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadSpecialSetups: bindActionCreators(scenarioDetailActions.loadSpecialSetups, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialSetups);
