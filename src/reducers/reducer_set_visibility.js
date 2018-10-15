import {SET_VISIBILITY} from '../actions/index';

export default function(state = 'Products', action) {
    if(action.error) {
        return state;
    }

    switch(action.type) {
        case SET_VISIBILITY:
            return action.payload;
        default:
    }
    return state;
}