import React, { Component } from 'react';
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

    console.log('showOptions', showOptions);

    let button = null;

    if (showOptions) {
      button = <ButtonOptions showOptions={this.state.showOptions} />;
    } else {
      button = <WarrantyTracker showOptions={this.state.showOptions} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default CoreWarranty;
