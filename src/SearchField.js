import { connect } from 'react-redux';
import React from 'react';
import { typeQueryString } from './actions';

const SearchField = ({queryString, onChange}) => (
  <input type='text' 
    value={queryString}
    onChange={onChange}/>
)

const mapStateToProps = ({queryString}) => ({  
  queryString
}); 

const mapDispatchToProps = dispatch => ({
  onChange: ({target: {value: newText}}) => {
    dispatch(typeQueryString(newText));
  }
});

export default connect(mapStateToProps, 
  mapDispatchToProps)(SearchField);
