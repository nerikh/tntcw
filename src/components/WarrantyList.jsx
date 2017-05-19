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
        {
          this.props.warrantyItems.map((warrantyItem, index) => {
            return (
            <WarrantyItem key={index} warrantyItem={warrantyItem} />
            )
          })
        }    
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
