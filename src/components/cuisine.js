import React from 'react';

export default class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'select'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Pick one' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option selected value="select one">select one</option>
            <option value="american">American</option>
            <option value="bagels">Bagels</option>
            <option value="bakery">Bakery</option>
            <option value="breakfast">Breakfast</option>
            <option value="chinese">Chinese</option>
            <option value="cocktails">Cocktails</option>
            <option value="coffee and tea">Coffee & Tea</option>
            <option value="dessert">Dessert</option>
            <option value="diner">Diner</option>
            <option value="greek">Greek</option>
            <option value="halal">Halal</option>
            <option value="ice cream">Ice Cream</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="latin american">Latin American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="noodles">Noodles</option>
            <option value="pasta">Pasta</option>
            <option value="raw bar">Raw Bar</option>
            <option value="seafood">Seafood</option>
            <option value="soup">Soup</option>
            <option value="sushi">Sushi</option>
            <option value="thai">Thai</option>
            <option value="vegan">Vegan</option>
          </select>
      </form>
    );
  }
}