import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';

const passwordLength = length({min: 8, max: 25});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		// ask how best to do a bar or restaurant selector
		// and the rest of the restaurant details
		const {email, password, restaurantName} = values;
		const user = {password, restaurantName};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	}

	render() {
		return (
			<form 
				className="login-form"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
			<label htmlFor="restaurantName">Name of Bar or Restaurant</label>
			<Field component={Input} type="text" name="restaurantName" />
			<label htmlFor="email">Email</label>
			<Field
                    component={Input}
                    type="text"
                    name="email"
                    validate={[required, nonEmpty, isTrimmed]}
                />
            <label htmlFor="password">Password</label>
            <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
            <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Done
                </button>
            </form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => 
	
})(RegistrationForm);






