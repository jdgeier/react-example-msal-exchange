import {GET_MESSAGES, GET_PROFILE, SEARCH_MESSAGES, SEND_MESSAGE} from '../../Actions/MSGraph/'

const initialState = {
    profile: {},
    messages: {},
    search: {},
    message: {},
}
export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_MESSAGES:
            return{...state, messages: action.payload }
            break;
        case GET_PROFILE:
            return{...state, profile: action.payload }
            break;
        case SEARCH_MESSAGES:
            return{...state, search: action.payload }
            break;
        case SEND_MESSAGE:
            return{...state, message: action.payload }
            break;
    default:
        return state
    }
}