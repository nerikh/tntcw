import React, { Component } from 'react';

class ButtonOptions extends Component {
 
  render() {
    return (
      <div>
      <button 
          className="button large hollow primary"
          onClick={() => this.setState({ showOptions: false })}
        >
          Warranty Tracker
        </button>
       
      </div>
    );
  }
}

export default ButtonOptions;
