import { GET_TABLE_INFO } from './actionTypes';

import axios from 'axios';

export const setTableInfo = info => {
  return {
    type: GET_TABLE_INFO,
    info
  };
};

export const getTableInfo = () => {
  return dispatch => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(resp => {
      const info = resp.data;
      dispatch(setTableInfo(info));
    })
    .catch(error => {
      console.log(error);
    });
  };
};
