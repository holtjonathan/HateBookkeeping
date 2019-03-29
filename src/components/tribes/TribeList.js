import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TribeList = ({ tribes }) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Times Chosen</th>
				<th>Most Chosen By</th>
			</tr>
		</thead>
		<tbody>
			{tribes.map((tribe) => {
				return (
					<tr key={tribe.id}>
						<td>
							<Link to={'/tribe/' + tribe.slug}>{tribe.name}</Link>
						</td>
						<td>{tribe.numberOfTimesChosen}</td>
						<td>{tribe.chosenMostOftenBy}</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

TribeList.propTypes = {
	tribes: PropTypes.array.isRequired
};

export default TribeList;
