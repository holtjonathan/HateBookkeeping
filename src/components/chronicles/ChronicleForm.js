import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ChronicleForm = ({ chronicle, players, onSave, onChange, saving = false, errors = {} }) => {
	return (
		<form onSubmit={onSave}>
			<h2>{chronicle.id ? 'Edit' : 'Add'} Chronicle</h2>
			{errors.onSave && (
				<div className="alert alert-danger" role="alert">
					{errors.onSave}
				</div>
			)}
			<TextInput name="name" label="Name" value={chronicle.name} onChange={onChange} error={errors.name} />

			<SelectInput
				name="currentLeader"
				label="Current Leader"
				value={chronicle.currentLeader || ''}
				defaultOption="Select Current Leader"
				options={players.map((player) => ({
					value: player.id,
					text: player.nickName
				}))}
				onChange={onChange}
				error={errors.currentLeader}
			/>

			<TextInput
				name="startDate"
				label="Start Date"
				value={chronicle.startDate}
				onChange={onChange}
				error={errors.startDate}
			/>

			<button type="submit" disabled={saving} className="btn btn-primary">
				{saving ? 'Saving...' : 'Save'}
			</button>
		</form>
	);
};

ChronicleForm.propTypes = {
	chronicle: PropTypes.object.isRequired,
	players: PropTypes.array.isRequired,
	errors: PropTypes.object,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	saving: PropTypes.bool
};

export default ChronicleForm;
