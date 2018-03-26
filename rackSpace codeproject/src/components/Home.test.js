import ConnectedHome from './Home';

describe('H O M E ',()=>{
    let wrapper;
    const initialState = {info:[]};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedHome store={store} /> )  
    });

    it('render the component', () => {
       expect(container.length).toEqual(1)
    });
});