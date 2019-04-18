import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      bar: null,
      restaurant: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        return (
            <div>
                <label>
                Bar
                    <input
                    name="bar"
                    type="checkbox"
                    checked={this.state.bar}
                    onChange={this.handleInputChange} />
                </label>
        
                <label>
                Restaurant
                    <input
                    name="restaurant"
                    type="checkbox"
                    checked={this.state.restaurant}
                    onChange={this.handleInputChange} />
                </label>
            </div>
        );
    }
}