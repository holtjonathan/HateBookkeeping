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

const scenarios = [
	{
		id: 1,
		name: 'Scenario1',
		slug: 'react-auth0-authentication-security',
		numberOfTimesChosen: 5,
		chosenMostOftenBy: 2
	},
	{
		id: 2,
		name: 'Scenario2',
		slug: 'react-auth0-authentication-security',
		numberOfTimesChosen: 2,
		chosenMostOftenBy: 1
	}
];
const newScenario = {
	id: null,
	name: '',
	numberOfTimesChosen: null,
	chosenMostOftenBy: null
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
	players
};
