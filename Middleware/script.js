function reducer(state=0, action){
    switch(action.type){
        case "INCREMENTAR":
            return state + 1;
        case "REDUZIR":
            return state - 1;
        default: 
            return state;
    }
}

const logger = (store) => (next) => (action)=>{
    console.group(action.type)
    console.log('ACTION',action);
    console.log('PREV_STATE', store.getState());
    const result = next(action)
    console.log('NEW_STATE', store.getState());
    console.groupEnd()
    return result
}


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose

const enhancer = composeEnhancers(Redux.applyMiddleware(logger))

const store = Redux.createStore(reducer, enhancer )

store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
const teste = store.dispatch({type: 'REDUZIR'})

console.log(teste);