import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './pages/Home'
import customTheme from './config/muiTheme'

const App = ({ store }) => (
	<Provider store={store}>
		<MuiThemeProvider theme={customTheme}>
			<Router>
				<div>
					<Route exact path="/" component={Home} />
				</div>
			</Router>
		</MuiThemeProvider>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
