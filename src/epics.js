import { createEpicMiddleware } from 'redux-observable';
import 'rxjs'; // gets operators
import { TYPE_QUERY_STRING, replaceResults } from './actions';

const epicMiddleware = createEpicMiddleware((actions$) =>
  actions$.ofType(TYPE_QUERY_STRING)
    .map(queryStringAction => replaceResults(['goodbye']))
);

export default epicMiddleware;