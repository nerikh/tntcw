import { combineReducers } from 'redux';
import user from './reducer_user';
import showOptions from './reducer_showOptions';
import warrantyItems from './reducer_warrantyItems';

export default combineReducers({
  user,
  showOptions,
  warrantyItems
})

