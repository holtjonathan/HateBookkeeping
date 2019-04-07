/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const {
	chronicles,
	newChronicle,
	scenarios,
	newScenario,
	tribes,
	newTribe,
	players,
	scenarioLocations,
	prereqs,
	scenarioSpecialSetups,
	scenarioSpecialRules,
	scenarioMissions,
	missionRewards,
	missionTribeUpgrades,
	upgrades,
	missionTypes
} = mockData;

const data = JSON.stringify({
	chronicles,
	newChronicle,
	scenarios,
	newScenario,
	tribes,
	newTribe,
	players,
	scenarioLocations,
	prereqs,
	scenarioSpecialSetups,
	scenarioSpecialRules,
	scenarioMissions,
	missionRewards,
	missionTribeUpgrades,
	upgrades,
	missionTypes
});
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function(err) {
	err ? console.log(err) : console.log('Mock DB created.');
});
