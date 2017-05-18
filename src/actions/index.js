import { SIGNED_IN, MAIN_OPTIONS } from '../constants';

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
