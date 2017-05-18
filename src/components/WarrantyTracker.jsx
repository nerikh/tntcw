import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mainOptions } from '../actions';

class WarrantyTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: true
    }
  console.log('state in WarrantyTracker', this.state);
  }
  
  handleShowOptions() {
    this.setState({ showOptions: true });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Warranty Tracker</h1>
          <button 
              className="button hollow primary"
              onClick={() => this.setState({ showOptions: false })}
            >
              Main Menu
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { showOptions } = state;
  return {
    showOptions
  }

}

export default connect(mapStateToProps, { mainOptions })(WarrantyTracker);
