import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './modal.css';
import { store } from '../store';
import { Provider } from 'react-redux';

class Modal extends Component {

	componentDidMount() {
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'modal';
		document.body.appendChild(this.modalTarget);
		this._render();
	}

	componentWillUpdate() {
		this._render();
	}

	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}

	_render() {
		ReactDOM.render(
			<Provider store= {store}>
				<Router>
				<div>{this.props.children}</div>
				</Router>
			</Provider>,
			this.modalTarget
		);
	}

	render() {
		return <noscript />;
	}
}

export default Modal;