import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      //concat returns a new instance of an array with the concatenated value
      //state.concat([action.payload.data]);

      //ES6 syntax
      //new array with action.payload.data and all of the entries in state array
      return [ action.payload.data, ...state]; //[city, city, city, ...]
    default:
      break;
  }
  return state;
}
