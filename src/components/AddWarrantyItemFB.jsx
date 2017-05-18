import React, { Component } from 'react';
//import { warrantyItemRef } from '../firebase';

class AddWarrantyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: '1',
      Vendor: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({Quantity: event.target.value});

  }

  handleSubmit(event) {
    alert('Your favorite number is: ' + this.state.Quantity);
    event.preventDefault();
    console.log('State in AddWarrantyItem', this.state);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.Quantity} 
            onChange={ event => this.setState({Quantity: event.target.value})}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddWarrantyItem;
