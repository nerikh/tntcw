import React, { Component } from 'react';

class WarrantyItem extends Component {
  render() {
    console.log('props from WarrantyItem', this.props.warrantyItem);
    const { Location, VIN } = this.props.warrantyItem;
    return (
      <div>
        <div>{ Location }</div>
        <div>{ VIN }</div>
      </div>
    )
  }
}

export default WarrantyItem;
