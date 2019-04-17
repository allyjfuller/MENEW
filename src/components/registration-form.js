import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Cuisine from './cuisine';
import Checkbox from './checkbox';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 8, max: 25});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {email, password, establishmentName} = values;
        const user = {email, password, establishmentName};
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
                <label>I am a:</label>
                <Field component={Checkbox} type="checkbox" name="establishmentType" validate={[required, nonEmpty]} />
                <label htmlFor="establishmentName">Name of establishment</label>
                <Field component={Input} type="text" name="establishmentName" />
                <label htmlFor="cuisine">Cuisine</label>
                <Field component={Cuisine} type="select" name="cuisine" />
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
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);






