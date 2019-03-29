import React from 'react';
import { connect } from 'react-redux';
import * as chronicleActions from '../../redux/actions/chronicleActions';
import * as playerActions from '../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ChronicleList from './ChronicleList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

class ChroniclesPage extends React.Component {
	//instead of constructor...using a class field
	state = {
		redirectToAddChroniclePage: false
	};

	componentDidMount() {
		const { chronicles, players, actions } = this.props;

		if (chronicles.length === 0) {
			actions.loadChronicles().catch((error) => {
				alert('Loading chronicles failed' + error);
			});
		}

		if (players.length === 0) {
			actions.loadPlayers().catch((error) => {
				alert('Loading players failed' + error);
			});
		}
	}

	handleDeleteChronicle = async (chronicle) => {
		toast.success('Chronicle deleted');
		try {
			await this.props.actions.deleteChronicle(chronicle);
		} catch (error) {
			toast.error('Delete failed. ' + error.message, { autoClose: false });
		}
	};

	render() {
		return (
			<div>
				{this.state.redirectToAddChroniclePage && <Redirect to="/chronicle" />}
				<h2>Chronicles</h2>
				{this.props.loading ? (
					<Spinner />
				) : (
					<div>
						<button
							style={{ marginBottom: 20 }}
							className="btn btn-primary add-course"
							onClick={() => this.setState({ redirectToAddChroniclePage: true })}
						>
							Add Chronicle
						</button>

						<ChronicleList chronicles={this.props.chronicles} onDeleteClick={this.handleDeleteChronicle} />
					</div>
				)}
			</div>
		);
	}
}

ChroniclesPage.propTypes = {
	chronicles: PropTypes.array.isRequired,
	players: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state) {
	return {
		chronicles:
			state.players.length === 0
				? []
				: state.chronicles.map((chronicle) => {
						return {
							...chronicle,
							currentLeader: state.players.find((a) => a.id === chronicle.currentLeader)
								? state.players.find((a) => a.id === chronicle.currentLeader).nickName
								: ''
						};
					}),
		players: state.players,
		loading: state.apiCallsInProgress > 0
	};
}

//what actions do we expose to our component?
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadChronicles: bindActionCreators(chronicleActions.loadChronicles, dispatch),
			loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch),
			deleteChronicle: bindActionCreators(chronicleActions.deleteChronicle, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChroniclesPage);
