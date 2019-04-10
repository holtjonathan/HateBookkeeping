import React from 'react';
import { Route, Switch } from 'react-router-dom'; //Switch ensures that only one route will match
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import ChroniclesPage from './chronicles/ChroniclesPage';
import TribesPage from './tribes/TribesPage';
import ScenariosPage from './scenarios/ScenariosPage';
import ManageChroniclePage from './chronicles/ManageChroniclePage'; //eslint-disable-line import/no-named-as-default
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewScenarioPage from './scenarios/ViewScenarioPage'; //eslint-disable-line import/no-named-as-default

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/chronicles" component={ChroniclesPage} />
				<Route path="/chronicle/:slug" component={ManageChroniclePage} />
				<Route path="/chronicle" component={ManageChroniclePage} />
				<Route path="/tribes" component={TribesPage} />
				<Route path="/scenarios" component={ScenariosPage} />
				<Route path="/scenario/:slug" component={ViewScenarioPage} />
				<Route path="/scenario" component={ViewScenarioPage} />
				<Route component={PageNotFound} />
			</Switch>
			<ToastContainer autoClose={3000} hideProgressBar />
		</div>
	);
}

export default App;
