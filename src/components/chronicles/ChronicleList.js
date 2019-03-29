import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ChronicleList = ({ chronicles, onDeleteClick }) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Current Round</th>
				<th>Current Leader</th>
				<th>Start Date</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{chronicles.map((chronicle) => {
				return (
					<tr key={chronicle.id}>
						<td>
							<Link to={'/chronicle/' + chronicle.slug}>{chronicle.name}</Link>
						</td>
						<td>{chronicle.currentRound}</td>
						<td>{chronicle.currentLeader}</td>
						<td>{chronicle.startDate}</td>
						<td>
							<button className="btn btn-outline-danger" onClick={() => onDeleteClick(chronicle)}>
								Delete
							</button>
						</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

ChronicleList.propTypes = {
	chronicles: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default ChronicleList;
