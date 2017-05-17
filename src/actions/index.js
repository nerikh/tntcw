import { SIGNED_IN } from '../constants';

// Email Parameter
export function logUser(email) {
  // Action creator creates action SIGNED_IN
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}
