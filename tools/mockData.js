const chronicles = [
	{
		id: 1,
		name: 'ChronicleName1',
		slug: 'chronicleName1',
		adminId: 1,
		currentRound: 'Finished!',
		currentLeader: 1,
		startDate: '01/01/2000'
	},
	{
		id: 2,
		name: 'ChronicleName2',
		slug: 'chronicleName2',
		adminId: 2,
		currentRound: '2',
		currentLeader: 3,
		startDate: '02/02/2000'
	}
];

const newChronicle = {
	id: null,
	name: '',
	adminId: null,
	currentRound: '',
	currentLeader: null,
	startDate: ''
};

const scenarioLocations = [
	{
		scenarioLocationId: 1,
		scenarioLocationName: 'Outer Circle'
	},
	{
		scenarioLocationId: 2,
		scenarioLocationName: 'Inner Circle'
	},
	{
		scenarioLocationId: 3,
		scenarioLocationName: 'Capital'
	}
];

const prereqs = [
	{
		prereqId: 1,
		prereqDescription: 'The Defenders Shaman must be alive'
	}
];

const scenarioSpecialSetups = [
	{
		scenarioSpecialSetupId: 1,
		scenarioId: 1,
		order: 1,
		setupText: 'Place 1 Interest token and 1 Hate token on the defenders Shaman Figure card.'
	}
];

const scenarioSpecialRules = [
	{
		scenarioSpecialRuleId: 1,
		scenarioId: 1,
		order: 1,
		ruleText:
			'Any defender Figure may take an Interest token (representing the body parts) at no action cost by ending their Movement adjacent to the token.'
	},
	{
		scenarioSpecialRuleId: 2,
		scenarioId: 1,
		order: 2,
		ruleText:
			'In order to fulfill the ritual, the defenders Shaman must have all 4 Interest tokens.  An active Figure may freely give an Interest token it is carrying to the Shaman, or the active Shaman may take it from them, as long as they are adjacent to each other at the end of their Movement'
	},
	{
		scenarioSpecialRuleId: 3,
		scenarioId: 1,
		order: 3,
		ruleText:
			'Every time the Shaman gets an Interest token, also add 1 Hate to its Figure card.  When the defender Shaman would be KOd, remove 1 Hate from its Figure card instead.  If theere are no more Hate tokens, then the Shaman is finally KOd.'
	}
];

const scenarioMissions = [
	{
		scenarioMissionId: 1,
		scenarioId: 1,
		missionTypeId: 1,
		scenarioMissionDescription: 'KO enemys Shaman',
		missionRewardId: 1,
		missionTribeUpgradeId: 1
	},
	{
		scenarioMissionId: 2,
		scenarioId: 1,
		missionTypeId: 2,
		scenarioMissionDescription: 'Fulfill the ritual.',
		missionRewardId: 2,
		missionTribeUpgradeId: 1
	}
];

const missionRewards = [
	{
		missionRewardId: 1,
		missionDescription: '2 Hate'
	},
	{
		missionRewardId: 2,
		missionDescription: '2 Resources'
	}
];

const missionTribeUpgrades = [
	{
		missionTribeUpgradeId: 1,
		upgradeId: 1
	}
];

const upgrades = [
	{
		upgradeId: 1,
		upgradeCode: 'Grab',
		upgradeName: 'Grab Upgrade',
		upgradeDescription: 'You can perform a Grab without spending an Action'
	}
];

const missionTypes = [
	{
		missionTypeId: 1,
		missionTypeName: 'Attacker'
	},
	{
		missionTypeId: 2,
		missionTypeName: 'Defender'
	},
	{
		missionTypeId: 3,
		missionTypeName: 'Side'
	}
];

const scenarios = [
	{
		scenarioId: 1,
		scenarioLocationId: 1,
		scenarioSlug: 'burn-the-witch',
		scenarioName: 'Burn the Witch',
		scenarioDescription:
			'Word reached us that mysterious body parts, imbued with powerful magic, have been found scattered around a tirualistic rock.  We cannot allow our enemys Shaman to harness that power.  That Witch will become body parts for our own rituals!',
		prereqId: 1
	}
];
const newScenario = {
	scenarioId: null,
	scenarioLocationId: null,
	scenarioName: '',
	scenarioDescription: '',
	prereqId: null
};

const tribes = [
	{
		id: 1,
		name: "Um'Kator",
		slug: 'um-kator',
		numberOfTimesChosen: 5,
		chosenMostOftenBy: 2
	},
	{
		id: 2,
		name: "Bul'Gar",
		slug: 'bul-gar',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 3,
		name: "Um'Rak",
		slug: 'um-rak',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 4,
		name: "Um'Gra",
		slug: 'um-gra',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 5,
		name: "Um'Gorr",
		slug: 'um-gorr',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 6,
		name: "Um'Cordu",
		slug: 'um-cordu',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 7,
		name: "Um'Cal",
		slug: 'um-cal',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 8,
		name: "Um'Tal",
		slug: 'um-tal',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 9,
		name: 'Vore Nash',
		slug: 'vorenash',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 10,
		name: "Um'Tull",
		slug: 'um-tull',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	},
	{
		id: 11,
		name: 'Sarrassa',
		slug: 'sarrassa',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	}
];
const newTribe = {
	id: null,
	name: '',
	numberOfTimesChosen: null,
	chosenMostOftenBy: null
};

const players = [
	{
		id: 1,
		firstName: 'Jonathan',
		lastName: 'Holt',
		nickName: 'McHolty'
	},
	{
		id: 2,
		firstName: 'Jared',
		lastName: 'Lee',
		nickName: 'kiki'
	},
	{
		id: 3,
		firstName: 'Corey',
		lastName: 'Snyder',
		nickName: 'SnyderDawg'
	}
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
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
};
