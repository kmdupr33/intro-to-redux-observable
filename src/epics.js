import { createEpicMiddleware } from 'redux-observable';
import 'rxjs'; // gets operators
import { ajax } from 'rxjs/observable/dom/ajax';
import { TYPE_QUERY_STRING, replaceResults } from './actions';

const swansonianSearch = (actions$) =>
  actions$.ofType(TYPE_QUERY_STRING)
    .filter(({payload}) => payload.length > 2)
    .debounceTime(300)        
    .mergeMap(({payload}) => ajax.getJSON(`http://localhost:8000?query=${payload}`)
      .do(results => console.log(`results: ${results}`))
      .takeUntil(actions$.ofType('CANCEL_SEARCH'))
      .map(results => replaceResults(results)))    


const epicMiddleware = createEpicMiddleware(swansonianSearch);


export default epicMiddleware;

