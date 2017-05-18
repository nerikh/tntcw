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
    
    const showCoreWarrantyOptions =
      <button 
          className="button large hollow primary"
          onClick={() => this.handleShowWarrantyTracker()}
        >
          Warranty Tracker
        </button>;

    const showOptionsButton =
      <button 
        className="button large hollow primary"
        onClick={() => this.handleShowOptions()}
      >
        Main Menu
      </button>;

    const warrantyTrackerComponent = <WarrantyTracker />;

    const buildWarrantyTracker = [warrantyTrackerComponent, showOptionsButton];
    const showWarrantyTracker = buildWarrantyTracker.map(function(component, index) {
      return <div key={index}>{component}</div>;
    });


    if (showOptions) {
      button = showCoreWarrantyOptions;
    } else {
      button = showWarrantyTracker;
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
