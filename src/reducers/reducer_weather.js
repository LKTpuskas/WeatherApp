import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            // Line below is es6 syntax - It is identical to the upper one
            return [action.payload.data, ...state];
    }
    return state;
}