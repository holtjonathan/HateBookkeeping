import React from 'react';
import { connect } from 'react-redux';
import * as tribeActions from '../../redux/actions/tribeActions';
import * as playerActions from '../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TribeList from './TribeList';

class TribesPage extends React.Component {
	componentDidMount() {
		const { tribes, players, actions } = this.props;

		if (tribes.length === 0) {
			actions.loadTribes().catch((error) => {
				alert('Loading tribes failed' + error);
			});
		}

		if (players.length === 0) {
			actions.loadPlayers().catch((error) => {
				alert('Loading players failed' + error);
			});
		}
	}

	render() {
		return (
			<div>
				<h2>Tribes</h2>
				<TribeList tribes={this.props.tribes} />
			</div>
		);
	}
}

TribesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	players: PropTypes.array.isRequired,
	tribes: PropTypes.array.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state) {
	return {
		tribes:
			state.players.length === 0
				? []
				: state.tribes.map((tribe) => {
						return {
							...tribe,
							chosenMostOftenBy: state.players.find((a) => a.id === tribe.chosenMostOftenBy).nickName
						};
					}),
		players: state.players
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadTribes: bindActionCreators(tribeActions.loadTribes, dispatch),
			loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TribesPage);
