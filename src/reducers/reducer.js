import * as types from '../actions/actionTypes';

const initState = { value: 0 };

const reducer = (state = initState, action) => {
    switch(action.type){
        case types.ACTION_INCREASE:
        return {
            ...state , value:state.value +1
        };
        case types.ACTION_DECREASE:
        return {
            ...state,value:state.value -1
        };
        default:
        return state;
    }
}

export default reducer;