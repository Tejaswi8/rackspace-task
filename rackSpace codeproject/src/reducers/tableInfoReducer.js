import { GET_TABLE_INFO } from '../actions/actionTypes';

const initialState = {
  info: []
};

const setTableInfo = (state, action) => {
  return { ...state, info: action.info };
};

const tableInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TABLE_INFO: return setTableInfo(state, action);
    default: return state;
  }
};

export default tableInfoReducer;
