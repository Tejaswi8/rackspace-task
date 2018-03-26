import tableInfoReducer from './tableInfoReducer';

describe('REDUCER',()=>{

    it('reducer for GET_TABLE_INFO', () => {
        let state = {
                      info: []
                    };
        state = tableInfoReducer(state, {type:"GET_TABLE_INFO", info:[{id:"1",title:"testTitle",body:"testBody"}]})
        expect(state).toEqual({info:[{id:"1",title:"testTitle",body:"testBody"}]})
    });

});