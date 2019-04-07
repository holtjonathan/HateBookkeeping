import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ScenarioList = ({ scenarios }) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Location</th>
			</tr>
		</thead>
		<tbody>
			{scenarios.map((scenario) => {
				//return <div key={scenario.scenarioId}>{scenario.scenarioId}</div>;
				return (
					<tr key={scenario.scenarioId}>
						<td>
							<Link to={'/scenario/' + scenario.slug}>{scenario.name}</Link>
						</td>
						<td>{scenario.locationName}</td>
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
