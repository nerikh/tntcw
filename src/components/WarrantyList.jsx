import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';
// LIST_WARRANTY_ITEMS to Props
import { connect } from 'react-redux';
import { listWarrantyItems } from '../actions'; 

class WarrantyList extends Component {
  componentDidMount() {
    warrantyItemRef.on('value', snap => {
      let warrantyItems = [];
      snap.forEach(warrantyItem => {
        const { ReceivedBy } = warrantyItem.val();
        warrantyItems.push({ ReceivedBy });
      })
      console.log('warrantyItems', warrantyItems);
      // LIST_WARRANTY_ITEMS to Props
      // Call listWarrantyItems from the Props of Goals
      this.props.listWarrantyItems(warrantyItems);
    })
  }

  render() {
    return (
      <div>Warranty Items List</div>
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
