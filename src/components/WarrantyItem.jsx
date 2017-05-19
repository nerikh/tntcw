import React, { Component } from 'react';


class WarrantyItem extends Component {
  render() {
    // Check to see what props are available...
    console.log('props from WarrantyItem', this.props.warrantyItem);
    const { Location, TurnedInBy, ReceivedBy, RO, VIN, Vendor, Customer, FailedPartNumber, Quantity, Description } = this.props.warrantyItem;
    return (
      <tr className="data-row">
        <td>{Location}</td>
        <td>{TurnedInBy}</td>
        <td>{ReceivedBy}</td>
        <td>{RO}</td>
        <td>{VIN}</td>
        <td>{Vendor}</td>
        <td>{Customer}</td>
        <td>{FailedPartNumber}</td>
        <td>{Quantity}</td>
        <td>{Description}</td>
      </tr>
    )
  }
}

export default WarrantyItem;
