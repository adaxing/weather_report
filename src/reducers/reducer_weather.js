import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case 'FETCH_WEATHER':
    // concat return old value + new value, do not change array
    return state.concat([action.payload.data]);
    // return [ action.payload.data, ...state ]; // [ city,city,city ] 
  }
  return state;
}
