import localStorage from './middleware/localStorage.js'
import thunk from './middleware/thunk.js'
import token from './token.js';
import user from './user.js';

const {createStore, compose,applyMiddleware,combineReducers} = Redux;
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(localStorage, thunk))
const reducer = combineReducers({token,user})
const store = createStore(reducer,enhancer)

export default store