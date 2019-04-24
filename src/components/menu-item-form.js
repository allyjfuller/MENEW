import React from 'react';

class MenuItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('An item was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Item Name:
					<br />
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<br />
				<label>
					Price:
					<br />
					<input type="number" value={this.state.value} onChange={this.handleChange} />
				</label>
				<br />
				<input type="file" />
				<br />
				<label>
				Description:
					<br />
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default MenuItemForm