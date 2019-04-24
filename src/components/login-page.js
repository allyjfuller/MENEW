import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from './modal';
import LoginForm from './login-form';
import Dashboard from './dashboard';

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" component={ Dashboard } />;
    }
    return (
        <div>
            <Modal>
            <h2>Login</h2>
            <LoginForm />
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);