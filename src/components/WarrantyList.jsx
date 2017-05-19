import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';

class WarrantyList extends Component {
  componentDidMount() {
    warrantyItemRef.on('value', snap => {
      let warrantyItems = [];
      snap.forEach(warrantyItem => {
        const { ReceivedBy } = warrantyItem.val();
        warrantyItems.push({ ReceivedBy });
      })
      console.log('warrantyItems', warrantyItems);
    })
  }

  render() {
    return (
      <div>Warranty Items List</div>
    );
  }
}

export default WarrantyList;
