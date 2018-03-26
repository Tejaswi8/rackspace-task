import { combineReducers } from 'redux';

import tableInfoReducer from './tableInfoReducer';

export default combineReducers({
  tableInfo: tableInfoReducer
});