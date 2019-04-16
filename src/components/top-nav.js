import React from 'react';
import LoginForm from './login-form';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import About from './about';
import Contact from './contact';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './img/logo.png';

export function TopNav(props) {
	return (

<Router>
		<nav>
			<ul>
				<Link to="/" className="home"><img src={ logo } alt="Logo" id="logo" /></Link>
				<li>
				<Link to="/about" className="about">WHO WE ARE</Link>
				</li>
				<li>
				<Link to="/login" className="login">LOGIN</Link>
				</li>
				<li>
				<Link to="/register" className="register">REGISTER</Link>
				</li>
				<li>
				<Link to="/contact" className="contact">CONTACT</Link>
				</li>
			</ul>
		</nav>
<Route exact path="/" component={ LandingPage } />
<Route path="/about" component={ About } />
<Route path="/register" component={ RegistrationPage } />
<Route path="/login" component={ LoginForm } />
<Route path="/contact" component={ Contact } />
</Router>


		);
}

/*
function home() {
	return (
		<div>
			<LandingPage />
		</div>
	);
}

function about() {
	return (
		<div>
			<h2>WHO WE ARE</h2>
		</div>
	);
}

function login() {
	return (
		<div>
			<LoginForm />
		</div>
	);
}

function register() {
	return (
		<div>
			<RegistrationPage />
		</div>
	);
}

function contact() {
	return (
		<div>
			<h2>CONTACT</h2>
		</div>
	);
}
*/

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(TopNav);

