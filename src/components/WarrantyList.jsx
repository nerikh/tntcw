import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';
// LIST_WARRANTY_ITEMS to Props
import { connect } from 'react-redux';
import { listWarrantyItems } from '../actions'; 
import WarrantyItem from './WarrantyItem';

class WarrantyList extends Component {
  componentDidMount() {
    warrantyItemRef.on('value', snap => {
      let warrantyItems = [];
      snap.forEach(warrantyItem => {
        const { Location, TurnedInBy, ReceivedBy, RO, VIN, Vendor, Customer, FailedPartNumber, Quantity, Description } = warrantyItem.val();
        warrantyItems.push({ Location, TurnedInBy, ReceivedBy, RO, VIN, Vendor, Customer, FailedPartNumber, Quantity, Description });
      })
      //      console.log('warrantyItems', warrantyItems);
      // LIST_WARRANTY_ITEMS to Props
      // Call listWarrantyItems from the Props of Goals
      this.props.listWarrantyItems(warrantyItems);
    })
  }

  render() {
    // LIST_WARRANTY_ITEMS to Props
    // ONLY RENDER ONE FIELD HERE, WILL RENDER ALL IN SEPARATE COMPONENT
    // FOR WARRANTY_ITEM
    //    console.log('this.props.warrantyItems', this.props.warrantyItems);
    return (
      <div>
        <table className="data-table stack">
          <thead>
            <tr>
              <th className="row1">Location</th>
              <th className="row2">Turned In By</th>
              <th className="row3">Received By</th>
              <th className="row4">R/O</th>
              <th className="row5">VIN</th>
              <th className="row6">Vendor</th>
              <th className="row7">Customer</th>
              <th className="row8">Failed Part No.</th>
              <th className="row9">QTY</th>
              <th className="row10">Description</th>
            </tr>
          </thead>
          <tbody>
              {
                this.props.warrantyItems.map((warrantyItem, index) => {
                  return (
                    <WarrantyItem key={index} warrantyItem={warrantyItem} />
                  )
                })
              }    
          </tbody>
        </table>
      </div>
    );
  }
}

// LIST_WARRANTY_ITEMS to Props
function mapStateToProps(state) {
  const { warrantyItems } = state;
  return {
    warrantyItems
  }
}

export default connect(mapStateToProps, { listWarrantyItems })(WarrantyList);
