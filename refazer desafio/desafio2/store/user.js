const USER_FETCH_STARTED = 'user/USER_FETCH_STARTED'
const USER_FETCH_SUCCESS = 'user/USER_FETCH_SUCCESS'
const USER_FETCH_ERROR = 'user/USER_FETCH_ERROR'

const userFetchStarted = ()=>({type: USER_FETCH_STARTED})
const userFetchSuccess = (payload)=>({type: USER_FETCH_SUCCESS,payload})
const userFetchError = (payload)=>({type: USER_FETCH_STARTED, payload})

const initialState ={
    loading: false,
    data: null,
    error: null,
}

export const userFetch = (token)=> async (dispatch)=>{
    try{
        dispatch(userFetchStarted())
        const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
        const data = await response.json()
        dispatch(userFetchSuccess(data))
    }catch(error){
        dispatch(userFetchError(error.message))
    }
}


function user(state=initialState,action){
    switch(action.type) {
        case USER_FETCH_STARTED:
            return {...state,loading: true}
        case USER_FETCH_SUCCESS:
            return {...state, loading: true, error: null}
        case USER_FETCH_ERROR:
            return {data: null, loading: true, error: action.payload}
        default: 
            return state
    }
}

export default user