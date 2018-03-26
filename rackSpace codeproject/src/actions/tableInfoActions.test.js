import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from './tableInfoActions';
import * as types from './actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
 
  it('creates GET_TABLE_INFO when fetching table info has been done', () => {
    fetchMock
      .getOnce('/posts', { body: { info: [{id:1,title:"testing",body:"testing111"}] }, headers: { 'content-type': 'application/json' } })
 
 
    const expectedActions = [
      { type: types.GET_TABLE_INFO, body: { info: [{id:1,title:"testing",body:"testing111"}] } }
    ]
    const store = mockStore({ info: [] })
 
    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})