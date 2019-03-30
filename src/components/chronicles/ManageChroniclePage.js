import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as chronicleActions from '../../redux/actions/chronicleActions';
import * as playerActions from '../../redux/actions/playerActions';
import PropTypes from 'prop-types';
import ChronicleForm from './ChronicleForm';
import { newChronicle } from '../../../tools/mockData';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

//...props is assigning any props that haven't been manually destructured to 'props'
export function ManageChroniclePage({
	chronicles,
	saveChronicle,
	players,
	loadChronicles,
	loadPlayers,
	history,
	...props
}) {
	const [ chronicle, setChronicle ] = useState({ ...props.chronicle });
	const [ errors, setErrors ] = useState({});
	const [ saving, setSaving ] = useState(false);
	//[state variable, setter func for state variable]
	useEffect(
		() => {
			if (chronicles.length === 0) {
				loadChronicles().catch((error) => {
					alert('Loading chronicles failed' + error);
				});
			} else {
				setChronicle({ ...props.chronicle });
			}

			if (players.length === 0) {
				loadPlayers().catch((error) => {
					alert('Loading players failed' + error);
				});
			}
		},
		[ props.chronicle ]
	);

	function handleChange(event) {
		const { name, value } = event.target;

		//the [name] below is JS computed property syntax.  allows us to reference a property via a variable.  it is the same as saying chronicle.name
		//events return numbers as strings so we need to convert currentLeader to an int
		setChronicle((prevChronicle) => ({
			...prevChronicle,
			[name]: name === 'currentLeader' ? parseInt(value, 10) : value
		}));
	}

	function handleSave(event) {
		event.preventDefault(); //stops postBack
		if (!formIsValid()) return;
		setSaving(true);
		saveChronicle(chronicle)
			.then(() => {
				toast.success('Chronicle saved.');
				history.push('/chronicles');
			})
			.catch((error) => {
				setSaving(false);
				setErrors({ onSave: error.message });
			});
	}

	function formIsValid() {
		const { name } = chronicle;
		const errors = {};

		if (!name) errors.name = 'Name is required';

		setErrors(errors);
		//form is valid if the errors object still has no properties
		return Object.keys(errors).length === 0;
	}

	//this array will list out the objects that useEffect will watch...when this array updates then this component will re-render
	//if this array is blank then this array will only render once when the component mounts (just like componentDidMount())

	return players.length === 0 || chronicles.length === 0 ? (
		<Spinner />
	) : (
		<ChronicleForm
			onChange={handleChange}
			chronicle={chronicle}
			errors={errors}
			players={players}
			onSave={handleSave}
			saving={saving}
		/>
	);
}

ManageChroniclePage.propTypes = {
	chronicles: PropTypes.array.isRequired,
	players: PropTypes.array.isRequired,
	loadChronicles: PropTypes.func.isRequired,
	loadPlayers: PropTypes.func.isRequired,
	chronicle: PropTypes.object.isRequired,
	saveChronicle: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};

//what part of state do we expose to our componenet?
function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const chronicle = slug && state.chronicles.length > 0 ? getChronicleBySlug(state.chronicles, slug) : newChronicle;

	return {
		//chronicle: newChronicle, //this ALWAYS passes in an empty chronicle
		chronicle,
		chronicles: state.chronicles,
		players: state.players
	};
}

//could be added to reducer for reuseability
export function getChronicleBySlug(chronicles, slug) {
	return chronicles.find((chronicle) => chronicle.slug === slug) || null;
}

//what actions do we expose to our component?
//objectVersion (connect wraps DISPATCH around properties within an object if it is provided like this):
const mapDispatchToProps = {
	loadChronicles: chronicleActions.loadChronicles,
	saveChronicle: chronicleActions.saveChronicle,
	loadPlayers: playerActions.loadPlayers
};

//functionVersion:
// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: {
// 			loadChronicles: bindActionCreators(chronicleActions.loadChronicles, dispatch),
// 			loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch)
// 		}
// 	};
// }

export default connect(mapStateToProps, mapDispatchToProps)(ManageChroniclePage);
