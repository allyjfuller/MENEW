import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './modal.css';
import { store } from '../store';
import { Provider } from 'react-redux';

class Modal extends Component {

// whenever component gets rendered to the screen we create a new div assigned to this.modalTarget
	componentDidMount() {
		this.modalTarget = document.createElement('div');
		// add class name to modal target
		this.modalTarget.className = 'modal';
		// take the div we just created and append it to the body tag in doc
		document.body.appendChild(this.modalTarget);
		// call method _render
		this._render();
	}

// whenever the component's about to update we do another render
// this render makes sure that if we get a new set of components or children in the modal
// we're going to render those to the parent div as well
	componentWillUpdate() {
		this._render();
	}

// clean up - whenever the component is about to unmount from the screen
// cleans up dom when the modal is removed from the component heirarchy
	componentWillUnmount() {
		// unmounts this.props.children
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}

	_render() {
		// take react dom library and render a div that contains this.props.children
		// and render it into this.modalTarget
		ReactDOM.render(
			<Provider store= {store}>
				<Router>
				<div>{this.props.children}</div>
				</Router>
			</Provider>,
			this.modalTarget
		);
	}

// <noscript /> basically renders nothing 

	render() {
		return <noscript />;
	}
}

export default Modal;

// Whenever my modal component gets rendered to the screen I create a new floating div out of thin air
// I append it to document.body so it gets appended to the body tag in my app
// and then I use react dom to render this.props.children to that new div (this.modalTarget)
// this.props.children is a reference to any components that get passed into my component
