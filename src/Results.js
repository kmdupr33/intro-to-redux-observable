import { connect } from 'react-redux';
import React from 'react';

const Results = ({searchResults}) => (
  <ul>
    {searchResults.map((result, index) => <li key={index}>{result}</li>)}
  </ul>
);

export default connect(({results}) => ({searchResults : results}))(Results);
