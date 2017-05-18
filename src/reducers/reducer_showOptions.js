import { MAIN_OPTIONS } from '../constants';

let showOptions = null;

// export anonymous arrow function with two parameters: State, and Action
export default (state = showOptions, action) => {
  switch (action.type) {
    case MAIN_OPTIONS:
      // Grab 'showOptions' from the action
      const { showOptions } = action;
      // return showOptions as our reducer start for showOptions
      return showOptions;
    // default: return this state, which is initialized to this user above
    default:
      return state;
  }
}

