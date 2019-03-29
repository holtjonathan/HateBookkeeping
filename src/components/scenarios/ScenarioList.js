import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ScenarioList = ({ scenarios }) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Times Chosen</th>
				<th>Most Chosen By</th>
			</tr>
		</thead>
		<tbody>
			{scenarios.map((scenario) => {
				return (
					<tr key={scenario.id}>
						<td>
							<Link to={'/scenario/' + scenario.slug}>{scenario.name}</Link>
						</td>
						<td>{scenario.numberOfTimesChosen}</td>
						<td>{scenario.chosenMostOftenBy}</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

ScenarioList.propTypes = {
	scenarios: PropTypes.array.isRequired
};

export default ScenarioList;
