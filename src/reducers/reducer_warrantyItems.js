import { LIST_WARRANTY_ITEMS } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_WARRANTY_ITEMS:
      // Grab warrantyItems from the action 
      const { warrantyItems } = action;
      // return warrantyItems as our recuder state for warrantyItems
      return warrantyItems;
    // default: return this state, which is the empty array above
    default:
      return state;
  }
}
