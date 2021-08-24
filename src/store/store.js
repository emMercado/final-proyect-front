import { applyMiddleware, createStore, compose } from 'redux/';
import { PlacesReducer } from './reducers/PlacesReducer';
/* import { GET_PLACES,  confirmedGetPlacesAction  } from './actions/PlacesActions'
 */import thunk from 'redux-thunk';

/*  const loggerMiddleware = (store) => (next) => (actions) => {
    console.log('dispatching action', actions);
    console.log('before dispatching state', store.getState());
    let result = next(actions);
    setTimeout(()=> {
        console.log('dispatch time out')
    },5000)
    console.log('next state', store.getState());
    return result; 
};  */

/* const fetchDataMiddleware = store => next => actions => {
    if (actions.type === GET_PLACES) {
        //ajax call
        
    }
    return next(actions);
} */
 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = applyMiddleware(/* loggerMiddleware, fetchDataMiddleware */ thunk);

export const store = createStore(PlacesReducer, composeEnhancers(middleware));

