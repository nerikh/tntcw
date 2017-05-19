import React, { Component } from 'react';
import { warrantyItemRef } from '../firebase';

class WarrantyList extends Component {
  componentDidMount() {
    warrantyItemRef.on('value', snap => {
      snap.forEach(warrantyItem => {
        let warrantyItemObject = warrantyItem.val();
        console.log('warrantyItemObject', warrantyItemObject); 
      })
    })
  }

  render() {
    return (
      <div>Warranty Items List</div>
    );
  }
}

export default WarrantyList;
