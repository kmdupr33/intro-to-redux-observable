import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import SearchField from './SearchField';
import Results from './Results';
import reducer from './reducers';
import epicMiddleware from './epics';

const initialState = { queryString: '', results: ['hello'] };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
  initialState,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

const App = (props) => (
  <Provider store={store}>
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1>Countries Search</h1>
      <SearchField />
      <Results />
    </div>
  </Provider>
);

export default App;
