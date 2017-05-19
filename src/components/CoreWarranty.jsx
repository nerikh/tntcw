import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mainOptions } from '../actions';
//import WarrantyTracker from './WarrantyTracker';
import WarrantyList from './WarrantyList';

class CoreWarranty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: true
    }
  }

  handleShowWarrantyList() {
    this.setState({ showOptions: false });
  }

  handleShowOptions() {
    this.setState({ showOptions: true });
  }

  render() {
    const showOptions = this.state.showOptions;

    let optionsToggle = null;
    
    const showCoreWarrantyOptions =
      <button 
          className="button large hollow primary"
          onClick={() => this.handleShowWarrantyList()}
        >
          Warranty List
        </button>;

    const showOptionsButton =
      <button 
        className="button large hollow primary"
        onClick={() => this.handleShowOptions()}
      >
        Main Menu
      </button>;

    const warrantyListComponent = <WarrantyList />;

    const buildWarrantyList = [warrantyListComponent, showOptionsButton];
    const showWarrantyList = buildWarrantyList.map(function(component, index) {
      return <div key={index}>{component}</div>;
    });


    if (showOptions) {
      optionsToggle = showCoreWarrantyOptions;
    } else {
      optionsToggle = showWarrantyList;
    }

    console.log('state in CoreWarranty', this.state);
    return (
      <div>
        {optionsToggle}
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
