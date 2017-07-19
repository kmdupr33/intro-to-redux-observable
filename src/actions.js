export const TYPE_QUERY_STRING = 'TYPE_QUERY_STRING';

export const REPLACE_RESULTS = 'REPLACE_RESULTS';

export const typeQueryString = (queryString) => ({
  type: TYPE_QUERY_STRING,
  payload: queryString
});

export const replaceResults = (newResults) => ({
  type: REPLACE_RESULTS,
  payload: newResults
});