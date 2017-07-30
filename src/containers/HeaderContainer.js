import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFilm } from '../actions';
import Header from '../components/Header/Header';

function HeaderContainer (props) {
  const search = props.search;
  return <Header search={search}/>
}

function mapDispatchToProps (dispatch) {
  // return bindActionCreators({searchFilm}, dispatch);
  return {
    search: (query) => dispatch(searchFilm(query))
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
