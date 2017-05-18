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

  handleShowOptions() {
    this.setState({ showOptions: true });
  }

  render() {
    const showOptions = this.state.showOptions;

    let button = null;
    const wTracker = <WarrantyTracker />;
    const alternate =
      <button 
        className="button large hollow primary"
        onClick={() => this.handleShowOptions()}
      >
        Main Menu
      </button>;
      //    const results = [wTracker, alternate];


    if (showOptions) {
      button = 
      <button 
          className="button large hollow primary"
          onClick={() => this.handleShowWarrantyTracker()}
        >
          Warranty Tracker
        </button>;
    } else {
      button = [ wTracker, alternate ]
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
