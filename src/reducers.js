import { TYPE_QUERY_STRING } from './actions';
import { REPLACE_RESULTS } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_QUERY_STRING:
      return {...state, queryString: action.payload};        
    case REPLACE_RESULTS:
      return {...state, results: action.payload};
    default:
      return state;
  }

};

export default reducer;