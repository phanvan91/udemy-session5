import {FETCH_WEATHER} from '../actions'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER :
            // console.log(action.payload.data)
            // return state.concat([action.payload.data])
            return [action.payload.data, ...state]
    }
    return state;
}