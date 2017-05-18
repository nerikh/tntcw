import { combineReducers } from 'redux';
import user from './reducer_user';
import showOptions from './reducer_showOptions';

export default combineReducers({
  user,
  showOptions
})

