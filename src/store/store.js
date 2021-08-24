import { applyMiddleware, createStore, compose } from 'redux/';
import { PlacesReducer } from './reducers/PlacesReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = applyMiddleware(thunk);

export const store = createStore(PlacesReducer, composeEnhancers(middleware));

