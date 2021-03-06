import React, { Component } from 'react';
import { getDemoRequest } from '../../redux/actions/demoActions';
import { connect } from 'react-redux'
import User from '../../components/User';
import PropTypes from 'prop-types'

class Home extends Component {
	componentWillMount() {
		this.props.getDemoRequest('hey');
	}
	render() {
		const { users } = this.props;

		let items = [];
		if (typeof users !== 'undefined') {
			items = users.map((value, index) => {
				return <User key={index} {...value} />;
			});
		}
		return <div>{items}</div>;
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getDemoRequest: payload => {
			dispatch(getDemoRequest(payload));
		}
	};
};
const mapStateToProps = state => {
	return {
		users: state.demoReducer[0]
	};
};
Home.propTypes = {
	dispatch: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
