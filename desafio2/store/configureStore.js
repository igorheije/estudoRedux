const {createStore, combineReducers,applyMiddleware,compose} = Redux

import token from './token.js';
import user from './user.js';
import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage))
//combinar reducer combineReducers
const reducer = combineReducers({token,user})
//criar o store com o createStore
const store = createStore(reducer,enhancer )

export default store