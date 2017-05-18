import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';

class AddWarrantyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: {
        Location: '',
        VIN: '',
        Invoice: '',
      },
      formInput: true,
      formOutput: false
    }
  }

  addWarrantyItem() {
    const { Location, VIN, Invoice } = this.state;

    if ( Location !== 'choose' && VIN !== '' && Invoice !== '') {
      warrantyItemRef.push({ Location, VIN, Invoice });
    }
    console.log('Add Warranty Item State', this.state);

  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="small-12 medium-8 large-10 columns">
            <select 
              onChange={event => this.setState({Location: event.target.value})}
            >
            <option value="choose">Select Location</option>
            <option value="JAX">JAX</option>
            <option value="NFWS">NFWS</option>
            <option value="LC">LC</option>
            <option value="WC">WC</option>
            <option value="440">440</option>
          </select>
          <input
              type="text"
              placeholder="VIN"
              className=""
              onChange={event => this.setState({VIN: event.target.value})}
            />
            <input
              type="text"
              placeholder="Invoice"
              className=""
              onChange={event => this.setState({Invoice: event.target.value})}
            />
            <button
              className="button primary"
              type="button"
              onClick={() => this.addWarrantyItem()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}


export default AddWarrantyItem;
