import { SIGNED_IN } from '../constants';

// declare user variable with null email
let user = {
  email: null
}

// export anonymous arrow function with two parameters: State, and Action
export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      // Grab 'email' from the action
      const { email } = action;
      // assign email address to the previously declared 'user' variable
      user = {
        email
      }
      // return the new user
      return user;
    // default: return this state, which is initialized to this user above
    default:
      return state;
  }
}

