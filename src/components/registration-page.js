import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export const RegistrationPage(props) {

	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="home">
			<h2>Registration</h2>

			<Link to="/">Login</Link>
		</div>

		);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);