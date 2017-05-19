import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';

class AddWarrantyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Location: 'choose',
      TurnedInBy: 'choose',
      ReceivedBy: 'choose',
      RO: '',
      VIN: '',
      Vendor: '',
      Customer: '',
      FailedPartNumber: '',
      Quantity: '1',
      Description: '',
      formInput: true,
      formOutput: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Quantity Selector: requires this because onChange won't accommodate default value of '1' 
  handleChange(event){
    this.setState({Quantity: event.target.value});
  }
 
  handleSubmit() {
    // this.state - capture values of form elements
    const { Location, TurnedInBy, ReceivedBy, RO, VIN, Vendor, Customer, FailedPartNumber, Quantity, Description  } = this.state;
    // Form validation - if any element is empty, do not submit the form 
    if ( (Location !== 'choose' && TurnedInBy !== 'choose' && ReceivedBy !== 'choose') && RO !== '' && VIN !== '' && Vendor !== '' && Customer !== '' && FailedPartNumber !== '' && Description !== '') {
      warrantyItemRef.push({ Location, TurnedInBy, ReceivedBy, RO, VIN, Vendor, Customer, FailedPartNumber, Quantity, Description });
    }
    console.log('State in AddWarrantyItem', this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="small-12 medium-8 large-6 columns">
            <div className="input-group">
              <span className="input-group-label">Branch</span>
              <select 
                onChange={event => this.setState({Location: event.target.value})}
                className="input-group-field"
              >
                <option value="choose">Select Location</option>
                <option value="JAX">JAX</option>
                <option value="NFWS">NFWS</option>
                <option value="LC">LC</option>
                <option value="WC">WC</option>
                <option value="440">440</option>
              </select>
            </div>
            <div className="input-group">
              <span className="input-group-label">Turned In By</span>
              <select 
                onChange={event => this.setState({TurnedInBy: event.target.value})}
                className="input-group-field"
              >
                <option value="choose">Select Name</option>
                <option value="0001-Billy">Billy</option>
                <option value="0002-Bobby">Bobby</option>
                <option value="0003-Mike">Mike</option>
                <option value="0004-John">John</option>
                <option value="0005-Paul">Paul</option>
              </select>
            </div>
            <div className="input-group">
              <span className="input-group-label">Received By</span>
              <select 
                onChange={event => this.setState({ReceivedBy: event.target.value})}
                className="input-group-field"
              >
                <option value="choose">Select Name</option>
                <option value="0001-Billy">Billy</option>
                <option value="0002-Bobby">Bobby</option>
                <option value="0003-Mike">Mike</option>
                <option value="0004-John">John</option>
                <option value="0005-Paul">Paul</option>
              </select>
            </div>
            <div className="input-group">
              <span className="input-group-label">RO</span>
              <input
                type="text"
                placeholder="RO"
                className="input-group-field"
                onChange={event => this.setState({RO: event.target.value})}
              />
            </div>
            <div className="input-group">
              <span className="input-group-label">VIN</span>
              <input
                  type="text"
                  placeholder="VIN"
                  className="input-group-field"
                  onChange={event => this.setState({VIN: event.target.value})}
              />
            </div>
            <div className="input-group">
              <span className="input-group-label">Vendor</span>
              <input
                type="text"
                placeholder="Vendor"
                className="input-group-field"
                onChange={event => this.setState({Vendor: event.target.value})}
              />
            </div>
            <div className="input-group">
              <span className="input-group-label">Customer</span>
              <input
                type="text"
                placeholder="Customer"
                className="input-group-field"
                onChange={event => this.setState({Customer: event.target.value})}
              />
            </div>
            <div className="input-group">
              <span className="input-group-label">Failed Part Number</span>
              <input
                type="text"
                placeholder="Failed Part Number"
                className="input-group-field"
                onChange={event => this.setState({FailedPartNumber: event.target.value})}
              />
            </div>
            <div className="input-group">
              <span className="input-group-label">Quantity</span>
              <select
                value={this.state.Quantity}
                onChange={ event => this.setState({Quantity: event.target.value})}
                className="input-group-field"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="6">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <div 
                className="input-group-label input-group-field"
                style={{textAlign: 'left'}}
              >Description
              </div>
              <textarea
                  placeholder="Description"
                  onChange={event => this.setState({Description: event.target.value})}
                >
              </textarea>
            </div>
            <input
              className="button primary"
              type="submit"
            />
          </div>
        </div>
      </form>
    )
  }
}


export default AddWarrantyItem;
