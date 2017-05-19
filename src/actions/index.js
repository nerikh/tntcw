import { SIGNED_IN, MAIN_OPTIONS, LIST_WARRANTY_ITEMS } from '../constants';

// Email Parameter
export function logUser(email) {
  // Action creator creates action SIGNED_IN
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

// Main Options: Warranty or Core
export function mainOptions(showOptions) {
  const action = {
    type: MAIN_OPTIONS,
    showOptions
  }
  return action;
}

// LIST_WARRANTY_ITEMS
export function listWarrantyItems(warrantyItems) {
  const action = {
    type: LIST_WARRANTY_ITEMS,
    warrantyItems
  }
  return action;
}
