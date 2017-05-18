import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mainOptions } from '../actions';
import WarrantyTracker from './WarrantyTracker';
import ButtonOptions from './ButtonOptions';

class CoreWarranty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: true
    }
  }

  showOptionsClick() {
    this.setState({ showOptions: true });
  }

  showWarrantyClick() {
    this.setState({ showOptions: false });
  }

  render() {
    const showOptions = this.state.showOptions;

    console.log('this', this);

    let button = null;

    if (showOptions) {
      button = <ButtonOptions  />;
    } else {
      button = <WarrantyTracker />;
    }

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
