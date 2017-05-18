import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mainOptions } from '../actions';
import WarrantyTracker from './WarrantyTracker';

class CoreWarranty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: true
    }
  }

  handleShowWarrantyTracker() {
    this.setState({ showOptions: false });
  }

  render() {
    const showOptions = this.state.showOptions;

    let button = null;

    if (showOptions) {
      button = 
      <button 
          className="button large hollow primary"
          onClick={() => this.handleShowWarrantyTracker()}
        >
          Warranty Tracker
        </button>;
    } else {
      button = <WarrantyTracker />;
    }
    console.log('state in CoreWarranty', this.state);
    return (
      <div>
        {button}
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

export default connect(mapStateToProps, { mainOptions })(CoreWarranty);
